import styled, { css } from "styled-components"
import { flexCenterAlign } from "styles/OftenStyle"

export const QuantityCounterDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            ${flexCenterAlign}
            border: 1px solid ${colors.gray};
            input {
                display: block;
                border: none;
                text-align: center;
            }
            input:focus {
                border: 1px solid ${colors.black};
            }
            button,
            input {
                width: 40px;
                height: 40px;
                font-size: ${fonts.f14};
            }

            button:nth-child(2) {
                border-right: 1px solid ${colors.gray};
                border-left: 1px solid ${colors.gray};
            }
        `
    }}
`
