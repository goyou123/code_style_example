import styled, { css } from "styled-components"
import { H2 } from "styles/OftenStyle"

export const ProductPageDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            width: 70%;
            margin: 0 auto;

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

            .pagination {
                text-align: center;
                margin-top: 100px;
            }
        `
    }}
`
export const Container = styled.div`
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
`
