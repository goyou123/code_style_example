import React, { useEffect, useState } from "react"

//utils
import { moneyFormat } from "lib/utils"
import _ from "lodash"

//css
import { ProductCardDiv } from "components/ProductCard/ProductCard.style"

// zustand
import { useBoundStore } from "store/useBoundStore"

interface IProps {
    product: {
        item_no: number
        item_name: string
        detail_image_url: string
        price: number
        score: number
        availableCoupon?: boolean
    }
}

function ProductCard({ product }: IProps) {
    const cartItems = useBoundStore((state) => state.cartItems)
    const addCart = useBoundStore((state) => state.addCart)
    const removeCart = useBoundStore((state) => state.removeCart)
    const [isCart, _setIsCart] = useState(false)

    useEffect(() => {
        // console.log(`${product.item_name}의 장바구니 여부는 ${isCart}`)
        _setIsCart(_.some(cartItems, { item_no: product.item_no }))
    }, [cartItems])

    return (
        <ProductCardDiv>
            <div className="product-img">
                <img src={product.detail_image_url} alt={product.item_name} />
            </div>
            <div className="product-info">
                <div>
                    <h3 title={product.item_name}>{product.item_name}</h3>
                    <p>{moneyFormat(product.price)}</p>
                </div>

                {isCart ? (
                    <button onClick={() => removeCart([product.item_no])}>빼기</button>
                ) : (
                    <button onClick={() => addCart(product)}>담기</button>
                )}
            </div>
        </ProductCardDiv>
    )
}

export default ProductCard
