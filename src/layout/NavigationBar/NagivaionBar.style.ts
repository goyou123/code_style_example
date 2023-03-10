import styled, { css } from "styled-components"
import { flexCenterSpaceBetween } from "styles/OftenStyle"
export const NavDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            // header
            background: ${colors.black};
            position: fixed;
            width: 100%;
            height: 70px;
            line-height: 70px;
            z-index: 1001;

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
                position: relative;
                li {
                    position: relative;
                    padding: 0 0 0 20px;
                    color: ${colors.white};
                    font-size: ${fonts.f14};
                }
                li a:after {
                    content: "";
                    position: absolute;
                    background-color: ${colors.white};
                    height: 3px;
                    width: 0;
                    left: 20px;
                    bottom: 17px;
                    transition: 0.3s;
                }

                // 추후 약간의 애니메이션 추가하기
                li:hover ::after {
                    width: 78%;
                    /* transition: 0.5s; */
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
