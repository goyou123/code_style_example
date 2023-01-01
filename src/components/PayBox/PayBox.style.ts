import styled, { css } from "styled-components"
import { flexCenterSpaceBetween } from "styles/OftenStyle"

export const PayBoxDiv = styled.div`
    ${({ theme }) => {
        const { fonts, colors } = theme
        return css`
            // 결제 박스 크기 및 배치
            width: 300px;
            height: 100%;
            border: 1px solid ${colors.black};
            border-radius: 8px;
            position: sticky;
            top: 100px;
            margin-top: 20px;

            // 박스 전체
            .price-box {
                padding: 20px 20px 0 20px;
                ul {
                    padding-bottom: 20px;
                }
                li {
                    ${flexCenterSpaceBetween}
                    padding-bottom: 14px;
                    font-size: ${fonts.f14};

                    span {
                        font-weight: bold;
                    }

                    .discount {
                        color: ${colors.red};
                    }

                    .select-coupon {
                        width: 110px;
                    }
                }

                // 결제 예상 금액
                .expect-price {
                    ${flexCenterSpaceBetween}
                    padding: 30px 0;
                    border-top: 1px solid ${colors.gray};
                    b {
                        font-size: ${fonts.f14};
                    }

                    p {
                        font-size: ${fonts.f18};
                        font-weight: bold;
                    }
                }
            }

            // 결제 버튼
            button {
                display: block;
                background: ${colors.black};
                color: ${colors.white};
                font-weight: bold;
                font-size: ${fonts.f18};
                width: 100%;
                border-radius: 0 0 7px 7px;
                padding: 20px 0;
            }
        `
    }}
`
