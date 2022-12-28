import { css } from "styled-components"
/** 자주 사용되는 CSS 묶음들을 정의한 파일* */

/* 가운데 정렬 - 중앙 */
export const flexCenterAlign = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

/* 가운데 정렬 - 양쪽 끝 */
export const flexCenterSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const flexColumSpaceBetween = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
