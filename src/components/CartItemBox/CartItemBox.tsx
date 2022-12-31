import React, { useEffect, useState } from "react"
import { moneyFormat } from "lib/utils"
//zustand
import { useBoundStore } from "store/useBoundStore"

//css
import { CartItemBoxLi } from "components/CartItemBox/CartItemBox.style"

interface IProps {
    product: {
        item_no: number
        item_name: string
        detail_image_url: string
        price: number
        score: number
        availableCoupon?: boolean
    }
    handleSingleCheck: (checked: boolean, id: number) => void
    checkItems: number[]
}
function CartItemBox({ product, handleSingleCheck, checkItems }: IProps) {
    const cartItems = useBoundStore((state) => state.cartItems)
    const index = cartItems.findIndex((a) => {
        return a.item_no === product.item_no
    })

    const [inputs, _setInputs] = useState(Number(cartItems[index].quantity)) // 초기값이 store에 있는 해당 아이템의 수량
    const [price, _setPrice] = useState<string>()
    const changeQantity = useBoundStore((state) => state.changeQantity)

    useEffect(() => {
        if (inputs > 100) {
            alert("구매가능한 상품 수를 초과하였습니다. (100개)")
            _setInputs(100)
            changeQantity(product.item_no, "write", 100)
        }

        if (inputs === 0) {
            alert("1 이하는 입력할 수 없습니다.")
            _setInputs(1)
            changeQantity(product.item_no, "write", 1)
        }
        const res = moneyFormat(product.price * inputs)
        _setPrice(res)
    }, [inputs])

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    /* input 핸들러 고려사항
     * - 입력시마다 작동해야 한다.
     * - 텍스트는 입력해도 아무일 X
     * - 숫자 앞에 0을 제거한다.
     * - 3.3ㅁㄴㅇ1 -> 331 로 변경되어 입력되도록 (복붙값도 포함)
     * - 100 이상을 입력했을 때 100으로 처리
     * - 0 을 입력했을 때 1로 처리
     */
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        const newValue = Number(val.replace(/[^0-9]/g, ""))

        // if (newValue === 0) {
        //     alert("1 이하는 입력할 수 없습니다.")
        //     _setInputs(1)
        // }

        _setInputs(newValue)
        changeQantity(product.item_no, "write", newValue)
    }
    const increase = () => {
        changeQantity(product.item_no, "increase")
        _setInputs(inputs + 1)
    }

    const decrease = () => {
        changeQantity(product.item_no, "decrease")
        _setInputs(inputs - 1)
    }

    return (
        <CartItemBoxLi>
            <div className="product-info-area">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="item"
                        id={`check ${product.item_no}`}
                        onChange={(e) => handleSingleCheck(e.target.checked, product.item_no)}
                        checked={!!checkItems.includes(product.item_no)}
                    />

                    <label htmlFor={`check ${product.item_no}`} />
                </div>
                <div className="product-img">
                    <img src={product.detail_image_url} alt="" />
                </div>
                <div className="product-name">
                    <h4>{product.item_name}</h4>
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
                    <b>{price}</b>
                </div>
            </div>
        </CartItemBoxLi>
    )
}

export default CartItemBox
