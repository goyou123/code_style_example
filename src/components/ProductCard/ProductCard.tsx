import React from "react"
import { moneyFormat } from "lib/utils"
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
    return (
        <ProductCardDiv>
            <div className="product-img">
                <img src={product.detail_image_url} alt={product.item_name} />
            </div>
            <div className="product-info">
                <div>
                    <h3 title={product.item_name}>{product.item_name}</h3>
                    <p>{moneyFormat(product.price)}</p>
                </div>

                {/* TODO : 컴포넌트로 분리? */}
                <button>담기</button>
            </div>
        </ProductCardDiv>
    )
}

export default ProductCard
