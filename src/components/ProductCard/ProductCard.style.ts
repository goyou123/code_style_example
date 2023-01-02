import styled, { css } from "styled-components"
import { flexCenterSpaceBetween, flexCenterAlign, longTextStyle, flexColumSpaceBetween } from "styles/OftenStyle"

export const ProductCardDiv = styled.div`
    ${({ theme }) => {
        const { colors, fonts } = theme
        return css`
            border: 1px solid ${colors.gray};

            .product-box {
                position: relative;
                overflow: hidden;
            }

            .product-box:hover {
                .product-img {
                    overflow: hidden;
                    img {
                        transform: scale(1.04);
                        transition: 0.3s all;
                    }
                }

                .cart-btn-wrap {
                    transform: translateX(0);
                    transition: 0.3s;
                }
            }

            // 상품 이미지 사이즈 조절
            .product-img {
                width: 100%;
                height: 240px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform: scale(1);
                    transition: 0.3s all;
                }
            }

            .cart-btn-wrap {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                height: 240px;
                transform: translateX(-100%);
                transition: 0.3s;
                background: ${colors.black};
                background-color: rgba(0, 0, 0, 0.4);
                ${flexCenterAlign}

                button {
                    height: 80px;
                    width: 80px;
                    padding: 12px;
                    border-radius: 70%;
                    border: 2px solid ${colors.white};
                    color: ${colors.white};
                    font-weight: bold;
                    line-height: 50px;
                    background: rgba(0, 0, 0, 0.6);

                    svg {
                        padding: 8px;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            // 상품 내용
            .product-info {
                ${flexColumSpaceBetween}
                padding: 12px 8px;
                height: 74px;
                /* overflow: hidden; */
                h3 {
                    font-size: ${fonts.f14};
                    /* ${longTextStyle} */
                }

                p {
                    font-size: ${fonts.f16};
                    font-weight: bold;
                }
            }
        `
    }}
`
