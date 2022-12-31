/*store에서 사용되는 타입들 정의 */

export interface ProductType {
    item_no: number
    item_name: string
    detail_image_url: string
    price: number
    score: number
    availableCoupon?: boolean
    quantity?: number
}

export interface CartStoreType {
    cartItems: ProductType[]
    addCart: (item: ProductType) => void
    removeCart: (IDArray: number[]) => void
    changeQantity: (productID: number, type: string, count?: number) => void
}
