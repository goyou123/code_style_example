//zustand
import produce from "immer"
import { StateCreator } from "zustand"

// utils
import _ from "lodash"

//type
import { ProductType } from "types/main"
import { CartStoreType } from "types/storeTypes"

export const createCartSlice: StateCreator<CartStoreType> = (set) => ({
    // 장바구니 들어갈 객체형태의 아이템 배열 (초기는 빈값)
    cartItems: [],

    // 장바구니 추가시 cartItems배열에 객체 형태로 데이터 추가
    addCart: (product: ProductType) =>
        set(
            produce((state) => {
                // 수량 속성 추가 후 저장
                const addQantity = { ...product }
                addQantity.quantity = 1

                // cartItem에 추가된 product 추가
                state.cartItems = [...state.cartItems, addQantity]
            })
        ),

    // 상품 ID값을 배열로 받아서 cartItems 에서 삭제
    removeCart: (IDArray: number[]) =>
        set(
            produce((state) => {
                for (let i = 0; i < IDArray.length; i++) {
                    _.remove(state.cartItems, {
                        item_no: IDArray[i],
                    })
                }
            })
        ),

    // 장바구니 수량 변경
    changeQantity: (productID: number, type: string, count: number) =>
        set(
            produce((state) => {
                const index = state.cartItems.findIndex((a: ProductType) => {
                    return a.item_no === productID
                })

                // CartItemBox컴포넌트와 같은 타입들사용
                // 타입은 유저들이 상품수량을 변경할 수 있는 3가지 방법들을말함 (-1,+1,직접입력)
                switch (type) {
                    case "INCREASE":
                        state.cartItems[index].quantity += count
                        break
                    case "DECREASE":
                        state.cartItems[index].quantity -= count
                        break
                    case "INPUT":
                        console.log("[store] INPUT case에 들어온 count :", count)

                        // CartItemBox 컴포넌트에서 예외처리가 되있어 count는 1~99 사이로 들어오지만,
                        // 추후 다른 페이지에서도 수량을 변경해야될 경우 store에서 한번에 예외처리하는것이 좋을 것 같다.
                        // 물론 컴포넌트단에서도 유저들에게 예외사항을 알려줘야 하기 때문에 어느정도 처리는 필요하다.
                        if (count === 0) {
                            state.cartItems[index].quantity = 1
                            break
                        }

                        if (count > 100) {
                            state.cartItems[index].quantity = 100
                            break
                        }

                        state.cartItems[index].quantity = count
                        break
                }

                console.log(`[store] ${productID}번 아이템 최종 상품 갯수는 ${state.cartItems[index].quantity}`)
            })
        ),
})
