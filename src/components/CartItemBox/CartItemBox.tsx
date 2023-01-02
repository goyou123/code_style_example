import React, { useEffect, useState } from "react"
import { moneyFormat } from "lib/utils"
//zustand
import { useBoundStore } from "store/useBoundStore"

//css
import { CartItemBoxLi } from "components/CartItemBox/CartItemBox.style"

//types
import { ProductType } from "types/main"
interface IProps {
    product: ProductType
    handleSingleCheck: (checked: boolean, id: number) => void
    checkItemsArray: number[]
}

function CartItemBox({ product, handleSingleCheck, checkItemsArray }: IProps) {
    // console.log(product.item_no)

    const cartItems = useBoundStore((state) => state.cartItems)
    const index = cartItems.findIndex((a: ProductType) => {
        return a.item_no === product.item_no
    })

    const [inputs, _setInputs] = useState(Number(cartItems[index].quantity)) // 초기값이 store에 있는 해당 아이템의 수량
    const [price, _setPrice] = useState<number>(0)
    const changeQantity = useBoundStore((state) => state.changeQantity)

    const LIMIT_COUNT = 100 // 상품의 최대 수량 (임의로 결정)
    const PRODUCT_ID = product.item_no

    useEffect(() => {
        // 물건 각각의 수량에 따른 금액 설정
        const sum = product.price * inputs
        _setPrice(sum)
    }, [inputs])

    /* input값의 변화에 따라 input값 랜더링과 store에서 수량변경을 해주는 함수 */
    const setInputAndChangeStore = (productID: number, type: string, count: number) => {
        console.log(`${type} / ${count}`)
        switch (type) {
            case "INCREASE":
                _setInputs(inputs + count)
                changeQantity(productID, type, count)
                break

            case "DECREASE":
                _setInputs(inputs - count)
                changeQantity(productID, type, count)
                break

            case "INPUT":
                _setInputs(count)
                changeQantity(productID, type, count)
                break

            default:
                console.error(`[cart] ${type} 은 지정되지 않은 타입입니다. `)
        }
    }

    /* input 핸들러 고려사항
     * - 입력시마다 작동해야 한다. (store저장 + input값 변화)
     * - 텍스트는 입력해도 아무일 X
     * - 숫자 앞에 0을 제거한다.
     * - 3.3ㅁㄴㅇ1 -> 331 로 변경되어 입력되도록 (복붙값도 포함)
     * - 100 이상을 입력했을 때 100으로 처리
     * - 0 을 입력했을 때 1로 처리
     */
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        const newValue = Number(val.replace(/[^0-9]/g, ""))

        if (newValue === 0) {
            alert("1 이하는 입력할 수 없습니다.")
            setInputAndChangeStore(PRODUCT_ID, "INPUT", 1)
            return
        }

        if (newValue > 100) {
            alert(`구매가능한 상품 수를 초과하였습니다. (${LIMIT_COUNT}개)`)
            setInputAndChangeStore(PRODUCT_ID, "INPUT", LIMIT_COUNT)
            return
        }

        // 필터를 거쳐 1 ~ 100 사이의 숫자만 오게됨
        setInputAndChangeStore(PRODUCT_ID, "INPUT", newValue)
    }

    /* -,+ 수량 증가감소 함수들 */
    const increase = () => {
        if (inputs >= 1 && inputs < LIMIT_COUNT) {
            setInputAndChangeStore(PRODUCT_ID, "INCREASE", 1)
        } else {
            console.error("[cart] 수량증가시 입력범위 초과")
            alert(`구매가능한 상품 수를 초과하였습니다. (${LIMIT_COUNT}개)`)
        }
    }

    const decrease = () => {
        if (inputs > 1 && inputs <= LIMIT_COUNT) {
            setInputAndChangeStore(PRODUCT_ID, "DECREASE", 1)
        } else {
            console.error("[cart] 수량감소시 입력범위 초과")
            alert("1 이하는 입력할 수 없습니다.")
        }
    }

    return (
        <CartItemBoxLi>
            <div className="product-info-area">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="item"
                        id={`check ${PRODUCT_ID}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, PRODUCT_ID)}
                        checked={!!checkItemsArray.includes(PRODUCT_ID)}
                    />

                    <label htmlFor={`check ${PRODUCT_ID}`} />
                </div>
                <div className="product-img">
                    <img src={product.detail_image_url} alt="" />
                </div>
                <div className="product-name">
                    <h4>
                        {product.item_name}{" "}
                        <span className="isCoupon"> {product.availableCoupon === false && "[쿠폰 적용 불가]"}</span>
                    </h4>
                    <p>{moneyFormat(product.price)}</p>
                </div>
            </div>

            <div className="product-price-area">
                <div className="product-counter">
                    <button onClick={decrease}>-</button>
                    <input
                        type="text"
                        pattern="[0-9]*"
                        title="0~9사이의 숫자조합만 입력 가능"
                        value={inputs}
                        min="1"
                        max="100"
                        onChange={onChange}
                    />

                    <button onClick={increase}>+</button>
                </div>
                <div className="product-price">
                    <b>{moneyFormat(price)}</b>
                </div>
            </div>
        </CartItemBoxLi>
    )
}

export default CartItemBox
