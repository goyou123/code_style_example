/* 1000 -> 1,000원 으로 변환해주는 함수 */
export const moneyFormat = (price: number) => {
    const result = price.toLocaleString("ko-KR")
    return result + "원"
}
