import React, { useEffect, useState, ChangeEvent, useMemo } from "react"

//zustand
import { useBoundStore } from "store/useBoundStore"

//utils
import { moneyFormat } from "lib/utils"

//css
import { CartItemBoxLi } from "components/CartItemBox/CartItemBox.style"

//types
import { ProductType } from "types/main"

//components
import QuantityCounter from "components/QuantityCounter/QuantityCounter"

interface IProps {
    product: ProductType
    handleSingleCheck: (e: ChangeEvent<HTMLInputElement>, id: number) => void
    checkItemsArray: number[]
}

function CartItemBox({ product, handleSingleCheck, checkItemsArray }: IProps) {
    const cartItems = useBoundStore((state) => state.cartItems)

    // input의 값이 변화했는데 store값을 건드리지 않을때 (ex. 1 -> 0 -> 1) 불필요한 계산 방지
    // store장바구니에 해당 product가 있는지 확인 후 index반환
    const index = useMemo(() => {
        const findIndex = cartItems.findIndex((a: ProductType) => {
            return a.item_no === product.item_no
        })

        return findIndex
    }, [cartItems])

    // 초기값이 store에 있는 해당 아이템의 수량 -> 다시 들어와도 입력해놨던 수량 유지
    const [inputs, _setInputs] = useState(Number(cartItems[index].quantity))
    const [price, _setPrice] = useState<number>(0)

    const PRODUCT_ID = product.item_no

    useEffect(() => {
        // 물건 각각의 수량에 따른 금액 설정
        const sum = product.price * inputs
        _setPrice(sum)
    }, [inputs])

    return (
        <CartItemBoxLi>
            <div className="product-info-area">
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="item"
                        id={`check ${PRODUCT_ID}`}
                        onChange={(e) => handleSingleCheck(e, PRODUCT_ID)}
                        checked={!!checkItemsArray.includes(PRODUCT_ID)}
                    />

                    <label htmlFor={`check ${PRODUCT_ID}`} />
                </div>
                <div className="product-img">
                    <img src={product.detail_image_url} alt={product.item_name} />
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
                <QuantityCounter product={product} inputs={inputs} _setInputs={_setInputs} />
                <div className="product-price">
                    <b>{moneyFormat(price)}</b>
                </div>
            </div>
        </CartItemBoxLi>
    )
}

export default CartItemBox
