import React from "react"
import ProductCard from "components/ProductCard/ProductCard"

import { ProductPageDiv, Container } from "pages/ProductPage/ProductPage.style"
function ProductsPage(props: any) {
    return (
        <ProductPageDiv>
            <div>
                <h2>상품목록</h2>
                <p>
                    총 <span>12</span>개 상품이 있습니다.
                </p>
                <Container>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Container>
            </div>

            <div className="pagination">페이지네이션</div>
        </ProductPageDiv>
    )
}

export default ProductsPage
