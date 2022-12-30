import React from "react"
import { CartItemBoxLi } from "components/CartItemBox/CartItemBox.style"
import { moneyFormat } from "lib/utils"

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
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
                <div className="product-price">
                    <b>{moneyFormat(product.price)}</b>
                </div>
            </div>
        </CartItemBoxLi>
    )
}

export default CartItemBox
