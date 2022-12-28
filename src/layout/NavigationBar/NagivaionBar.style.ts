import styled, { css } from "styled-components"
import { flexCenterSpaceBetween } from "styles/OftenStyle"
export const NavDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            // header
            padding: 20px 0;
            background: black;

            // logo
            h1 {
                font-size: ${fonts.f30};
                font-weight: bold;
                color: ${colors.white};
                cursor: pointer;
            }

            // navigation
            ul {
                display: flex;
                li {
                    padding: 0 0 0 20px;
                    color: ${colors.white};
                    font-size: ${fonts.f14};
                }

                // 추후 약간의 애니메이션 추가하기
                li:hover {
                    font-weight: bold;
                    transition: 0.5s;
                }
            }
        `
    }}
`

export const ContainerDiv = styled.div`
    ${flexCenterSpaceBetween}
    width: 70%;
    margin: 0 auto;
`
