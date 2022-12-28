import React from "react"

//css
import { ProductCardDiv } from "components/ProductCard/ProductCard.style"
interface IProps {
    product: {
        item_no: number
        item_name: string
        detail_image_url: string
        price: number
        score: number
        availableCoupon?: boolean
    }
}

function ProductCard({ product }: IProps) {
    // let result = price.toLocaleString("ko-KR")
    // console.log(result)
    return (
        <ProductCardDiv>
            <div className="product-img">
                <img src={product.detail_image_url} alt={product.item_name} />
            </div>
            <div className="product-info">
                <div>
                    <h3 title={product.item_name}>
                        {/* 위키오 3in1 거치대형 무선충전기 아이폰, 갤럭시, 스마트워치, 무선이어폰 동시충전 */}
                        {product.item_name}
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
