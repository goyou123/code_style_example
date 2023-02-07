import React, { useState, useMemo, useLayoutEffect } from "react"
//component
import ProductCard from "components/ProductCard/ProductCard"
import Paging from "components/Paging/Paging"

//css
import { ProductPageDiv, Container } from "pages/ProductPage/ProductPage.style"

//data
import { productItems } from "lib/DummyData"

function ProductsPage() {
    const [productArray, _setProductArray] = useState(productItems) // 보여줄 상품 리스트

    // 페이징 관련 state들
    const [page, _setPage] = useState(1) // 페이지 위치
    const totalCount = productItems.length // 데이터의 총 개수
    const limit = 5 // 하나의 페이지당 보여줄 아이템 갯수

    /* score 내림차순으로 정렬 */
    const sortArray = useMemo(() => {
        // 불변성 유지를 위해 spread를 사용하여 원본배열 복사해서 사용
        const result = [...productItems.sort((a, b) => b.score - a.score)]
        return result
    }, [])

    /* 현재 페이지 변경 핸들러 */
    const handlePageChange = (page: number) => {
        _setPage(page)
    }

    /* page 변경에 따라 5개씩 잘라 보여준다.
     * 페이지 진입 시 데이터가 12개 보였다가 -> 5개로 변화하는 화면 깜빡임 문제를 해결하기 위해
     * 동기적으로 작동하는 useLayoutEffect를 사용함 (내부코드 실행 후 paint작업)
     * 로직이 복잡할 경우에는 사용자가 레이아웃을 보기까지 오래걸리므로 지양해야 함
     */
    useLayoutEffect(() => {
        const num = (page - 1) * limit
        const showFiveItems = sortArray.slice(num, num + limit)
        _setProductArray(showFiveItems)
    }, [page])

    return (
        <ProductPageDiv>
            <div>
                <h2>상품목록</h2>
                <p className="product-count-text">
                    총 <span>{productItems.length}</span>개 상품이 있습니다.
                </p>
                <Container>
                    {productArray.map((p) => {
                        return <ProductCard key={p.item_no} product={p} />
                    })}
                </Container>
            </div>
            <Paging page={page} totalCount={totalCount} handlePageChange={handlePageChange} limit={limit} />
        </ProductPageDiv>
    )
}

export default ProductsPage
