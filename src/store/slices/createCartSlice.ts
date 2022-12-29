import produce from "immer"
import { StateCreator } from "zustand"
import _ from "lodash"

import { ProductType, CartStoreType } from "store/storeTypes"

export const createCartSlice: StateCreator<CartStoreType> = (set) => ({
    // 장바구니 들어갈 객체형태의 아이템 배열 (초기는 빈값)
    cartItems: [],

    // 장바구니 추가시 cartItems배열에 객체 형태로 데이터 추가
    addCart(data: ProductType) {
        set((state) => ({ cartItems: [...state.cartItems, data] }))
    },

    // 상품 ID값을 배열로 받아서 cartItems 에서 삭제
    removeCart: (indexArray: number[]) =>
        set(
            produce((state) => {
                for (let i = 0; i < indexArray.length; i++) {
                    _.remove(state.cartItems, {
                        item_no: indexArray[i],
                    })
                }
            })
        ),
})
