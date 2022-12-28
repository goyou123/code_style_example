import styled, { css } from "styled-components"
import { flexCenterSpaceBetween } from "styles/OftenStyle"

export const ProductCardDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            border: 1px solid ${colors.gray};
            .product-img {
                img {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover;
                }
            }

            .product-info {
                ${flexCenterSpaceBetween}
                padding: 8px;
                > div {
                    flex: 7;
                    h3 {
                        display: block;
                        font-size: ${fonts.f16};
                        max-width: 180px;
                        width: inherit;
                        // 후에 반응형으로 변경
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    p {
                        font-size: ${fonts.f14};
                        font-weight: bold;
                    }
                }

                button {
                    flex: 2;
                    border: 1px solid blue;
                }
            }
        `
    }}
`
