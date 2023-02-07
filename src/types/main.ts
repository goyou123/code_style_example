/* 컴포넌트단에서 사용되는 객체들의 타입 모음 */
export interface ProductType {
    item_no: number
    item_name: string
    detail_image_url: string | undefined
    price: number
    score: number // 상품의 정렬 순서를 결정하는 값
    availableCoupon?: boolean // 쿠폰적용가능여부
    quantity?: number
}
