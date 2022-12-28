import { css } from "styled-components"
/** 자주 사용되는 CSS 묶음들을 정의한 파일* */

/* 가로 가운데 정렬 - 중앙 */
export const flexCenterAlign = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

/* 가로 가운데 정렬 - 양쪽 끝 */
export const flexCenterSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

/* 세로 가운데 정렬 - 양쪽 끝 */
export const flexColumSpaceBetween = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

/* 페이지 소제목 */
export const H2 = css`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            color: ${colors.text};
            font-weight: bold;
            font-size: ${fonts.f24};
            padding: 30px 0;
            border-bottom: 1px solid ${colors.gray};
        `
    }}
`
