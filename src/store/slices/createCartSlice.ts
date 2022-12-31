import produce from "immer"
import { StateCreator } from "zustand"
import _ from "lodash"

import { ProductType, CartStoreType } from "store/storeTypes"

export const createCartSlice: StateCreator<CartStoreType> = (set) => ({
    // 장바구니 들어갈 객체형태의 아이템 배열 (초기는 빈값)
    cartItems: [],

    // 장바구니 추가시 cartItems배열에 객체 형태로 데이터 추가
    // addCart(product: ProductType) {
    //     set((state) => ({ cartItems: [...state.cartItems, product] }))
    // },

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

    // 수량 추가
    changeQantity: (productID: number, type: string, count?: number) =>
        set(
            produce((state) => {
                const index = state.cartItems.findIndex((a: ProductType) => {
                    return a.item_no === productID
                })

                // if (count === 1 || count === -1) {
                //     state.cartItems[index].quantity += count
                // } else if (count === 0) {
                //     state.cartItems[index].quantity = 1
                // } else {
                //     // 직접 입력 시
                //     state.cartItems[index].quantity = count
                // }

                // console.log("[store] 최종 상품갯수는 :", state.cartItems[index].quantity)
                switch (type) {
                    case "increase":
                        state.cartItems[index].quantity += 1
                        break
                    case "decrease":
                        state.cartItems[index].quantity -= 1
                        break
                    case "write":
                        console.log("[store] wirte case에 들어온 count :", count)
                        if (count) {
                            if (count === 0) {
                                state.cartItems[index].quantity = 1
                            } else {
                                state.cartItems[index].quantity = count
                                // if (count > 100) {
                                //     state.cartItems[index].quantity = 100
                                // } else {
                                //     state.cartItems[index].quantity = count
                                // }
                            }
                        }

                        break
                }

                console.log("[store] 최종 상품갯수는 :", state.cartItems[index].quantity)
            })
        ),
})
