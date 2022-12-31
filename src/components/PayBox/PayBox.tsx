import React, { useEffect, useState } from "react"
//css
import { PayBoxDiv } from "./PayBox.style"
// utils
import { moneyFormat } from "lib/utils"
//zustand
import { useBoundStore } from "store/useBoundStore"
import _ from "lodash"

interface IProps {
    totalPrice: string
    checkItemsArray: number[]
    _setTotalPrice: React.Dispatch<React.SetStateAction<string>>
}

function PayBox({ totalPrice, _setTotalPrice, checkItemsArray }: IProps) {
    const cartItems = useBoundStore((state) => state.cartItems)
    const [selectValue, _setSelectValue] = useState("")
    let total = 0
    useEffect(() => {
        for (let i = 0; i < cartItems.length; i++) {
            // 체크한 리스트에 장바구니 안의 상품이 있으면 ()
            const isChecked = _.some(checkItemsArray, (item) => item === cartItems[i].item_no)

            if (isChecked) {
                total = total + cartItems[i].price * cartItems[i].quantity
            }
        }
        console.log(total)

        _setTotalPrice(moneyFormat(total))
    }, [cartItems, checkItemsArray])

    useEffect(() => {
        console.log(selectValue)
    }, [selectValue])

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        _setSelectValue(e.target.value)
    }

    return (
        <PayBoxDiv>
            <div className="price-box">
                <ul>
                    <li>
                        <p>상품 금액</p>
                        <p>
                            <span>+ {totalPrice}</span>
                        </p>
                    </li>
                    <li>
                        <p>할인 쿠폰</p>
                        <div>
                            <select onChange={onChange} value={selectValue}>
                                <option value={1}>선택안함</option>
                                <option value={2}>10% 할인쿠폰</option>
                                <option value={3}>-1만원 차감 쿠폰</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <p>할인 금액</p>
                        <p>
                            <span className="discount">- 155500원</span>
                        </p>
                    </li>
                </ul>
                <div className="expect-price">
                    <b>결제 예상 금액</b>
                    <p>구현중</p>
                </div>
            </div>
            <button> {totalPrice} 주문하기</button>
        </PayBoxDiv>
    )
}

export default PayBox
