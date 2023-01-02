import React, { useEffect, useState } from "react"

//utils
import { moneyFormat } from "lib/utils"
import _ from "lodash"

//css
import { ProductCardDiv } from "components/ProductCard/ProductCard.style"
import { BsCartPlus } from "react-icons/bs"
import { BsCartDash } from "react-icons/bs"

// zustand
import { useBoundStore } from "store/useBoundStore"

//types
import { ProductType } from "types/main"

interface IProps {
    product: ProductType
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

    const add = () => {
        if (cartItems.length >= 3) {
            alert("장바구니에는 최대 3개의 상품만 담을 수 있습니다.")
        } else {
            if (confirm("장바구니에 상품을 추가하시겠습니까?")) {
                addCart(product)
            }
        }
    }

    const remove = () => {
        if (confirm("장바구니에서 상품을 제거하시겠습니까?")) {
            removeCart([product.item_no])
        }
    }

    return (
        <ProductCardDiv>
            <div className="product-box">
                <div className="product-img">
                    <img src={product.detail_image_url} alt={product.item_name} />
                </div>
                <div className="cart-btn-wrap">
                    {isCart ? (
                        <button onClick={remove} className={"btn-remove-cart"}>
                            {/* <span>장바구니에서 제거</span> */}
                            <BsCartDash />
                        </button>
                    ) : (
                        <button onClick={add} className={"btn-add-cart"}>
                            {/* <span>장바구니에 추가</span> */}
                            <BsCartPlus />
                        </button>
                    )}
                </div>
            </div>

            <div className="product-info">
                <h3 title={product.item_name}>{product.item_name}</h3>
                <p>{moneyFormat(product.price)}</p>
            </div>
        </ProductCardDiv>
    )
}

export default ProductCard
