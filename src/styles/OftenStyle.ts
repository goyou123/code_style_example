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
/* 모든 페이지 좌우여백 + h2 폰트 적용 */
export const defaultPageStyle = css`
    width: 70%;
    margin: 0 auto;
    padding: 70px 0 0 0;
    h2 {
        ${H2};
    }
`

/* 공통 체크박스 스타일 */
export const defaultCheckBoxStyle = css`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            input {
                display: none;
            }
            input[type="checkbox"] + label {
                display: block;
                width: 20px;
                height: 20px;
                border: 1px solid #7a7a7a;
                position: relative;
            }
            input:checked + label::after {
                content: "✓";
                font-size: ${fonts.f16};
                font-weight: bold;
                width: 20px;
                height: 20px;
                text-align: center;
                position: absolute;
                left: 0;
                top: 0;
                background-color: ${colors.black};
                color: ${colors.white};
            }
        `
    }}
`

/* 긴 텍스트 ...처리 */
export const longTextStyle = css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
