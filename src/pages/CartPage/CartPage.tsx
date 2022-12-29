import React, { useState } from "react"

//css
import { CartPageDiv } from "pages/CartPage/CartPage.style"

//zustand
import { useBoundStore } from "store/useBoundStore"

//component
import PayBox from "components/PayBox/PayBox"
import CartItemBox from "components/CartItemBox/CartItemBox"

function CartPage() {
    const cartItems = useBoundStore((state) => state.cartItems)

    return (
        <CartPageDiv>
            <h2>장바구니</h2>
            <div className="wrap">
                <div className="cart-item-area">
                    <div className="select-header">
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input type="checkbox" name="all" id="check-all" />
                                <label htmlFor="check-all" />
                            </div>
                            <p>전체선택</p>
                        </div>

                        <button>선택삭제</button>
                    </div>
                    <ul>
                        {cartItems.map((c) => (
                            <CartItemBox key={c.item_no} product={c} />
                        ))}
                    </ul>
                </div>
                <PayBox />
            </div>
        </CartPageDiv>
    )
}

export default CartPage
