import styled, { css } from "styled-components"
import { flexCenterAlign } from "styles/OftenStyle"

export const PagingDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            .pagination {
                ${flexCenterAlign}
                font-size: ${fonts.f14};

                li {
                    width: 30px;
                    height: 30px;
                    border: 1px solid ${colors.gray};
                    line-height: 30px;
                    cursor: pointer;
                }

                li.active a {
                    color: white;
                    width: 30px;
                    height: 30px;
                }

                li.active {
                    background-color: ${colors.black};
                }
            }
        `
    }}
`
