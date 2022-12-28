import styled, { css } from "styled-components"
import { H2 } from "styles/OftenStyle"

export const ProductPageDiv = styled.div`
    ${({ theme }) => {
        const { fonts } = theme
        return css`
            width: 70%;
            margin: 0 auto;
            padding: 70px 0 0 0;

            // 페이지 소제목 & 상품 수
            h2 {
                ${H2}
            }

            p {
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
    grid-template-columns: repeat(auto-fill, minmax(240px, auto));
`
