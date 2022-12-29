import styled, { css } from "styled-components"
import { flexCenterAlign } from "styles/OftenStyle"
export const CountNotifyDiv = styled.div`
    ${({ theme }) => {
        const { colors } = theme
        return css`
            height: 21px;
            width: 20px;
            color: ${colors.white};
            position: absolute;
            top: 25%;
            right: -20px;
            border-radius: 100%;
            background: red;
            ${flexCenterAlign}
        `
    }}
`
