import styled, { css } from "styled-components"
import { flexCenterSpaceBetween, flexCenterAlign, defaultCheckBoxStyle } from "styles/OftenStyle"

export const CartItemBoxLi = styled.li`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            ${flexCenterSpaceBetween}
            ${defaultCheckBoxStyle}
            padding: 10px 0;
            border-bottom: 1px solid ${colors.gray};

            // 좌측 - 상품 체크박스, 이미지, 제목
            .product-info-area {
                display: flex;
                align-items: center;
                height: auto;
                width: 65%;

                // 상품 이미지 사이즈 조절
                .product-img {
                    display: flex;
                    align-items: center;
                    width: 96px;
                    min-width: 96px;
                    height: 100px;
                    margin: 0 20px;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                //상품 이름
                .product-name {
                    font-size: ${fonts.f14};

                    h4 {
                        font-weight: bold;
                        padding-bottom: 10px;
                    }

                    .isCoupon {
                        font-weight: normal;
                        color: ${colors.red};
                    }
                }
            }

            // 우측 수량 카운터, 금액 부분
            .product-price-area {
                ${flexCenterSpaceBetween}
                width: 30%;

                // 가격
                .product-price {
                    margin-left: 40px;
                    b {
                        font-size: ${fonts.f16};
                        font-weight: bold;
                    }
                }
            }
        `
    }}
`
