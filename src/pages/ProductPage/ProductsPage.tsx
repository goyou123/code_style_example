import React, { useEffect, useState, useMemo } from "react"
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
    const [totalCount, _setTotalCount] = useState(productItems.length) // 데이터의 총 개수
    const limit = 5 // 하나의 페이지당 보여줄 아이템 갯수

    /* score 내림차순으로 정렬 */
    const sortArray = useMemo(() => {
        return productItems.sort((a, b) => a.score - b.score)
    }, [])

    /* 현재 페이지 변경 핸들러 */
    const handlePageChange = (page: number) => {
        _setPage(page)
    }

    /* page 변경에 따라 5개씩 잘라 보여준다. */
    useEffect(() => {
        const num = (page - 1) * 5
        const showFiveItems = sortArray.slice(num, num + 5)
        _setProductArray(showFiveItems)
    }, [page])

    return (
        <ProductPageDiv>
            <div>
                <h2>상품목록</h2>
                <p>
                    총 <span>12</span>개 상품이 있습니다.
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