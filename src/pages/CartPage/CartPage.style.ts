import styled, { css } from "styled-components"
import { defaultPageStyle, flexCenterSpaceBetween, defaultCheckBoxStyle } from "styles/OftenStyle"

export const CartPageDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            ${defaultPageStyle}

            .wrap {
                display: flex;
                justify-content: space-between;

                // 좌측 아이템 리스트
                .cart-item-area {
                    margin-right: 30px;
                    width: 95%;

                    // 전체선택 부분
                    .select-header {
                        ${flexCenterSpaceBetween}
                        border-bottom: 2px solid ${colors.black};
                        padding: 20px 0;

                        .checkbox-container {
                            display: flex;
                            align-items: center;
                            p {
                                font-size: ${fonts.f14};
                                padding-left: 10px;
                            }

                            .checkbox {
                                ${defaultCheckBoxStyle}
                            }
                        }

                        .btn-select-remove {
                            border-left: 1px solid ${colors.gray};
                            padding-left: 10px;
                        }
                    }

                    // 빈 장바구니
                    .empty {
                        line-height: 100px;
                        height: 100px;
                        text-align: center;
                        font-size: ${fonts.f20};
                    }
                }
            }
        `
    }}
`
