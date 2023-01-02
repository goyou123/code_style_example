import { ProductType } from "types/main"

export interface CartStoreType {
    cartItems: ProductType[]
    addCart: (item: ProductType) => void
    removeCart: (IDArray: number[]) => void
    changeQantity: (productID: number, type: string, count: number) => void
}
