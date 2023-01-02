import styled, { css } from "styled-components"
import { longTextStyle, flexColumSpaceBetween } from "styles/OftenStyle"

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

                /* .cart-btn-wrap {
                    transform: translateX(0);
                    transition: 0.3s;
                } */
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
                button {
                    position: absolute;
                    bottom: 6px;
                    right: 6px;
                    height: 60px;
                    width: 60px;
                    padding: 5px;
                    border-radius: 70%;

                    font-weight: bold;
                    line-height: 50px;

                    svg {
                        padding: 8px;
                        width: 100%;
                        height: 100%;
                        color: ${colors.white};
                        transform: scale(1);
                        transition: 0.3s all;
                    }
                }

                .btn-remove-cart {
                    background: rgba(100, 100, 100, 0.7);
                }
                .btn-add-cart {
                    background: rgba(0, 0, 0, 0.9);
                }

                button:hover {
                    svg {
                        transform: scale(1.1);
                        transition: 0.3s all;
                    }
                }
            }

            // 상품 내용
            .product-info {
                ${flexColumSpaceBetween}
                padding: 6px;
                height: 74px;

                h3 {
                    font-size: ${fonts.f14};
                    /* ${longTextStyle} */
                }

                p {
                    font-size: ${fonts.f18};
                    font-weight: bold;
                }
            }
        `
    }}
`
