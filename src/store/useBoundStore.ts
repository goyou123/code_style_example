import create from "zustand"
import { CartStoreType } from "store/storeTypes"
import { createCartSlice } from "store/slices/createCartSlice"
import { persist, devtools } from "zustand/middleware"

/* 추후 store의 확장을 고려하여 store들을 slice로 분할 */
export const useBoundStore = create<CartStoreType>()(
    devtools(
        persist(
            (...a) => ({
                ...createCartSlice(...a),
            }),
            {
                // 로컬스토리지에 저장되는 state들의 key값
                name: "cart-storage",
            }
        )
    )
)
