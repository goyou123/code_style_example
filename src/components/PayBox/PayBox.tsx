import React from "react"
import { PayBoxDiv } from "./PayBox.style"
function PayBox() {
    return (
        <PayBoxDiv>
            <div className="price-box">
                <ul>
                    <li>
                        <p>상품 금액</p>
                        <p>
                            <span>+ 155500원</span>
                        </p>
                    </li>
                    <li>
                        <p>할인 쿠폰</p>
                        <div>
                            <select>
                                <option value="coupon1">10% 할인쿠폰</option>
                                <option value="coupon2">-1만원 차감 쿠폰</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <p>할인 금액</p>
                        <p>
                            <span className="discount">- 155500원</span>
                        </p>
                    </li>
                </ul>
                <div className="expect-price">
                    <b>결제 예상 금액</b>
                    <p>60,1400원</p>
                </div>
            </div>
            <button>60,1400원 주문하기</button>
        </PayBoxDiv>
    )
}

export default PayBox
