import styled, { css } from "styled-components"
import { flexCenterAlign } from "styles/OftenStyle"

export const PagingDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            .pagination {
                ${flexCenterAlign}
                font-size: ${fonts.f14};

                // 숫자 박스
                li {
                    width: 30px;
                    height: 30px;
                    border: 1px solid ${colors.gray};
                    line-height: 30px;
                    cursor: pointer;
                }

                // 숫자
                li.active a {
                    color: white;
                    width: 30px;
                    height: 30px;
                }

                // 활성화된 페이지
                li.active {
                    background-color: ${colors.black};
                }
            }
        `
    }}
`
