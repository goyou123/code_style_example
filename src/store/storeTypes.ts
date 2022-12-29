/*store에서 사용되는 타입들 정의 */

export interface ProductType {
    item_no: number
    item_name: string
    detail_image_url: string
    price: number
    score: number
    availableCoupon?: boolean
}

export interface CartStoreType {
    cartItems: ProductType[]
    addCart: (i: ProductType) => void
    removeCart: (item: number[]) => void
}