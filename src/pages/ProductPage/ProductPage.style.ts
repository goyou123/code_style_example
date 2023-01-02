import styled, { css } from "styled-components"
import { defaultPageStyle } from "styles/OftenStyle"

export const ProductPageDiv = styled.div`
    ${({ theme }) => {
        const { fonts } = theme
        return css`
            ${defaultPageStyle}

            .product-count-text {
                font-size: ${fonts.f14};
                padding: 20px 0;
                span {
                    font-weight: bold;
                }
            }

            // 페이지네이션 배치
            .pagination {
                text-align: center;
                margin: 50px 0;
            }
        `
    }}
`
export const Container = styled.div`
    display: grid;
    grid-gap: 8px;
    /* grid-template-columns: repeat(auto-fill, minmax(240px, auto)); */
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`
