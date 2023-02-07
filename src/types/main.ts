/* 컴포넌트단에서 사용되는 객체들의 타입 모음 */
export interface ProductType {
    item_no: number
    item_name: string
    detail_image_url: string | undefined
    price: number
    score: number
    availableCoupon?: boolean
    quantity?: number
}
