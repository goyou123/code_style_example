import styled, { css } from "styled-components"
import { flexCenterSpaceBetween, longTextStyle } from "styles/OftenStyle"

export const ProductCardDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            border: 1px solid ${colors.gray};

            // 상품 이미지 사이즈 조절
            .product-img {
                width: 100%;
                height: 240px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            // 상품 내용
            .product-info {
                ${flexCenterSpaceBetween}
                padding: 8px;
                > div {
                    flex: 7;
                    overflow: hidden;
                    h3 {
                        font-size: ${fonts.f14};
                        ${longTextStyle}
                    }

                    p {
                        font-size: ${fonts.f14};
                        font-weight: bold;
                    }
                }

                // 담기 버튼
                button {
                    flex: 2;
                    border: 1px solid blue;
                }
            }
        `
    }}
`
