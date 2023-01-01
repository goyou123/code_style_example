import React, { useEffect, useState } from "react"

//css
import { CartPageDiv } from "pages/CartPage/CartPage.style"

//zustand
import { useBoundStore } from "store/useBoundStore"

//component
import PayBox from "components/PayBox/PayBox"
import CartItemBox from "components/CartItemBox/CartItemBox"

function CartPage() {
    const cartItems = useBoundStore((state) => state.cartItems)
    const removeCart = useBoundStore((state) => state.removeCart)
    const [checkItemsArray, _setCheckItemsArray] = useState<number[]>([])
    // const [totalPrice, _setTotalPrice] = useState<string>("")
    // const [totalPrice, _setTotalPrice] = useState<number>(0)

    useEffect(() => {
        // 초기 아이템 리스트 전체선택
        const idArray: number[] = []
        cartItems.forEach((el) => idArray.push(el.item_no))
        _setCheckItemsArray(idArray)
    }, [])

    /* 체크박스 단일 개체 선택 시 실행될 함수 */
    const handleSingleCheck = (checked: boolean, id: number) => {
        if (checked) {
            _setCheckItemsArray([...checkItemsArray, id])
        } else {
            // 체크 해제
            _setCheckItemsArray(checkItemsArray.filter((el) => el !== id))
        }
    }

    /* 전체 선택 함수 */
    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            const idArray: number[] = []
            cartItems.forEach((el) => idArray.push(el.item_no))
            _setCheckItemsArray(idArray)
        }

        // 해당 state를 비워 전체체크 해제
        else {
            _setCheckItemsArray([])
        }
    }

    /* 선택 삭제 함수 */
    const selectRemoveItems = () => {
        if (checkItemsArray.length > 0) {
            if (confirm(`선택한 상품 ${checkItemsArray.length}개를 삭제하시겠습니까?`)) {
                // store 장바구니 에서 삭제
                removeCart(checkItemsArray)

                // 체크박스 선택 리스트 초기화
                _setCheckItemsArray([])
            }
        } else {
            alert("선택한 상품이 없습니다.")
        }
    }

    return (
        <CartPageDiv>
            <h2>장바구니</h2>
            <div className="wrap">
                <div className="cart-item-area">
                    <div className="select-header">
                        <div className="checkbox-container">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    name="all"
                                    id="check-all"
                                    onChange={(e) => handleAllCheck(e.target.checked)}
                                    checked={
                                        checkItemsArray.length !== 0 && checkItemsArray.length === cartItems.length
                                            ? true
                                            : false
                                    }
                                />
                                <label htmlFor="check-all" />
                            </div>
                            <p>전체선택</p>
                        </div>
                        <button className="btn-select-remove" onClick={() => selectRemoveItems()}>
                            선택삭제
                        </button>
                    </div>
                    <ul>
                        {cartItems.length !== 0 ? (
                            cartItems.map((c) => (
                                <CartItemBox
                                    key={c.item_no}
                                    product={c}
                                    handleSingleCheck={handleSingleCheck}
                                    checkItemsArray={checkItemsArray}
                                />
                            ))
                        ) : (
                            <li className="empty">
                                <p>장바구니에 담긴 상품이 없습니다.</p>
                                <button>상품 보러가기 </button>
                            </li>
                        )}
                    </ul>
                </div>
                <PayBox checkItemsArray={checkItemsArray} />
            </div>
        </CartPageDiv>
    )
}

export default CartPage
