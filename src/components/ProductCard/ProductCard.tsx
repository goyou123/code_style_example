import React from "react"
import { ProductCardDiv } from "components/ProductCard/ProductCard.style"
function ProductCard() {
    // let result = price.toLocaleString("ko-KR")
    // console.log(result)
    return (
        <ProductCardDiv>
            <div className="product-img">
                <img
                    src="https://img.29cm.co.kr/next-product/2019/04/25/4fe7eda3069d4cdb867636faf36ad5a3_20190425135058.jpg?width=500"
                    alt="위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전"
                />
            </div>
            <div className="product-info">
                <div>
                    <h3 title="제목!!!">
                        위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전
                    </h3>
                    <p>20000원</p>
                </div>

                {/* TODO : 컴포넌트로 분리? */}
                <button>담기</button>
            </div>
        </ProductCardDiv>
    )
}

export default ProductCard
