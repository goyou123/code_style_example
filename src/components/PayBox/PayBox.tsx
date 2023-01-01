import React, { useEffect, useState } from "react"
//css
import { PayBoxDiv } from "./PayBox.style"

// utils
import { moneyFormat } from "lib/utils"
import _ from "lodash"

//zustand
import { useBoundStore } from "store/useBoundStore"

//data
import { coupons } from "lib/DummyData"

interface IProps {
    checkItemsArray: number[]
}

function PayBox({ checkItemsArray }: IProps) {
    const cartItems = useBoundStore((state) => state.cartItems)
    const [selectValue, _setSelectValue] = useState("DEFAULT")
    const [isDiscount, _setIsDiscount] = useState(false) // 쿠폰 선택 (select) disable 여부
    const [totalPrice, _setTotalPrice] = useState<number>(0) // 상품 금액 (sum)
    const [discountPrice, _setDiscountPrice] = useState(0) // 할인 금액
    const [finalPrice, _setFinalPrice] = useState<number>(0) // 결제 예상 금액

    /* 상품 금액 설정 (단순히 총합) */
    useEffect(() => {
        if (checkItemsArray.length === 0) {
            _setIsDiscount(false)
            _setTotalPrice(0)
            _setSelectValue("DEFAULT")
        } else {
            let sum = 0
            for (let i = 0; i < cartItems.length; i++) {
                // 체크한 리스트에 장바구니 안의 상품이 있는지 검토
                const isChecked = _.some(checkItemsArray, (item) => item === cartItems[i].item_no)

                // 존재하는 상품이라면 수량을 계산한 금액 누적
                if (isChecked) {
                    sum = sum + cartItems[i].price * cartItems[i].quantity
                }
            }
            _setTotalPrice(sum)
        }
    }, [cartItems, checkItemsArray])

    /* @@ 쿠폰 적용 로직 정리
     * 1. 할인 쿠폰 select에 따라 최종 할인 금액(discountPrice) 를 구한다.
     *      [예외1] select는 변화했지만 모든 체크리스트가 비어 상품 금액(totalPrice) 이 0일때 할인금액도 0으로 처리
     *
     *      1) 장바구니+체크리스트에 있는 상품들 중 쿠폰적용가능한 상품들의 총 금액 (sum)을 구해준다. => sumForDicountableItems()
     *          [예외2] 쿠폰적용한 상품들이 없을 경우 할인 금액도 0으로 처리한다.
     *          [예외2] 쿠폰적용한 상품들이 없을 경우 select도 default로 변경해준다. + 할인쿠폰 선택 안되도록
     *
     *      2) 할인 종류에 따라 최종 할인 금액(discountPrice) 를 구해준다.
     *
     *
     * 2. 최종할인금액(discountPrice)이 변화하면, 총 결제 금액 (finalPrice)을 구해준다.
     *
     *
     * 3. 해당 로직이 실행되는 타이밍
     *      1) 할인 쿠폰을 변경했을 때
     *          [예외] 체크리스트가 비어있다면 할인쿠폰 select를 disable 처리
     *      2) 할인 쿠폰은 선택되어있으면서
     *          [1] 상품 갯수가 변화할때 (totalPrice가 변경될 때)
     *          [2] 상품의 수량이 변화할때 (totalPrice가 변경될 때)
     *
     *      3) 페이지에 처음 들어올 때 -> DEFAULT로 설정
     *
     */
    useEffect(() => {
        if (totalPrice === 0) {
            // 예외1) 체크리스트가 비어 totalPrice가 0일 때 할인 금액도 초기화해준다.
            _setDiscountPrice(0)
        } else {
            const sum = sumForDicountableItems()

            if (sum === 0) {
                // 예외2) 체크리스트 안에 쿠폰적용불가 상품들만 있을 경우 할인금액을 초기화해준다
                _setDiscountPrice(0)
                _setIsDiscount(false)
                _setSelectValue("DEFAULT")
            } else {
                // console.log(`${selectValue} / 쿠폰적용가능한 아이템들의 총합 : ${sum} `)

                _setIsDiscount(true)
                switch (selectValue) {
                    case "DEFAULT":
                        _setDiscountPrice(0)
                        break

                    case "amount":
                        _setDiscountPrice(10000)
                        break

                    case "rate":
                        _setDiscountPrice(sum / 10)
                        break

                    default:
                        _setDiscountPrice(0)
                        console.error(`[payBox] "${selectValue}" 는 없는 선택지입니다. `)
                        break
                }
            }
        }
    }, [selectValue, totalPrice])

    /* 최종금액 */
    useEffect(() => {
        // 소수점 버림 처리
        _setFinalPrice(Math.floor(totalPrice - discountPrice))
    }, [discountPrice, totalPrice])

    /* 장바구니에 있으면서 체크리스트에 포함된 아이템들 중 체크되있는 아이템들의 금액 총합을 계산해주는 함수 */
    const sumForDicountableItems = () => {
        let sum = 0

        // 장바구니 조회
        for (let i = 0; i < cartItems.length; i++) {
            // 체크 리스트에 포함된 아이템들만 필터링
            const isChecked = _.some(checkItemsArray, (item) => item === cartItems[i].item_no)

            if (isChecked) {
                // 쿠폰 적용 가능한 아이템들의 금액 총합을 구해준다.
                if (cartItems[i].availableCoupon !== false) {
                    sum = sum + cartItems[i].price * cartItems[i].quantity
                }
            }
        }

        return sum
    }

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        _setSelectValue(e.target.value)
    }

    const paying = () => {
        alert("결제가 완료되었습니다!")
    }

    return (
        <PayBoxDiv>
            <div className="price-box">
                <ul>
                    <li>
                        <p>상품 금액</p>
                        <p>
                            <span>+ {moneyFormat(totalPrice)}</span>
                        </p>
                    </li>
                    <li>
                        <p>할인 쿠폰</p>
                        <div>
                            <select onChange={onChange} value={selectValue} className="select-coupon">
                                <option value={"DEFAULT"}>==선택안함==</option>
                                {coupons.map((c, i) => {
                                    return (
                                        <option key={i} value={c.type} disabled={!isDiscount && true}>
                                            {c.title}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </li>
                    <li>
                        <p>할인 금액</p>
                        <p>
                            <span className="discount">- {moneyFormat(discountPrice)}</span>
                        </p>
                    </li>
                </ul>

                <div className="expect-price">
                    <b>총 결제 금액</b>
                    <p>{moneyFormat(finalPrice)}</p>
                </div>
            </div>
            <button onClick={paying}>{moneyFormat(finalPrice)} 결제하기</button>
        </PayBoxDiv>
    )
}

export default PayBox
