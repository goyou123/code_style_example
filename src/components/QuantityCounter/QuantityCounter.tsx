import React, { Dispatch, SetStateAction } from "react"

// zustand
import { useBoundStore } from "store/useBoundStore"

// types
import { ProductType } from "types/main"

//css
import { QuantityCounterDiv } from "components/QuantityCounter/QuantityCounter.style"

interface IProps {
    product: ProductType
    inputs: number
    _setInputs: Dispatch<SetStateAction<number>>
}

/* 제품의 수량을 카운트하여 장바구니에 넣어주는 컴포넌트
 * 만약 상품상세페이지가 존재한다면 재활용될 수 있을것같아 컴포넌트화함
 */
function QuantityCounter({ product, inputs, _setInputs }: IProps) {
    const changeQantity = useBoundStore((state) => state.changeQantity)
    const PRODUCT_ID = product.item_no
    const LIMIT_COUNT = 100 // 상품의 최대 수량 (임의로 결정)

    /* input값의 변화에 따라 input값 랜더링과 store에서 수량변경을 해주는 함수 */
    const setInputAndChangeStore = (productID: number, type: string, count: number) => {
        // console.log(`${type} / ${count}`)
        switch (type) {
            case "INCREASE":
                _setInputs(inputs + count)
                changeQantity(productID, type, count)
                break

            case "DECREASE":
                _setInputs(inputs - count)
                changeQantity(productID, type, count)
                break

            case "INPUT":
                _setInputs(count)
                changeQantity(productID, type, count)
                break

            default:
                console.error(`[QuantityCount] ${type} 은 지정되지 않은 타입입니다. `)
        }
    }

    /* input 핸들러 고려사항
     * - 입력시마다 작동해야 한다. (store저장 + input값 변화)
     * - 텍스트는 입력해도 아무일 X
     * - 숫자 앞에 0을 제거한다.
     * - 3.3ㅁㄴㅇ1 -> 331 로 변경되어 입력되도록 (복붙값도 포함)
     * - 100 이상을 입력했을 때 100으로 처리
     * - 0 을 입력했을 때 1로 처리
     */
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        const newValue = Number(val.replace(/[^0-9]/g, ""))

        if (newValue === 0) {
            alert("1 이하는 입력할 수 없습니다.")
            setInputAndChangeStore(PRODUCT_ID, "INPUT", 1)
            return
        }

        if (newValue > 100) {
            alert(`구매가능한 상품 수를 초과하였습니다. (${LIMIT_COUNT}개)`)
            setInputAndChangeStore(PRODUCT_ID, "INPUT", LIMIT_COUNT)
            return
        }

        // 필터를 거쳐 1 ~ 100 사이의 숫자만 오게됨
        setInputAndChangeStore(PRODUCT_ID, "INPUT", newValue)
    }

    /* -,+ 수량 증가감소 함수들 */
    const increase = () => {
        if (inputs >= 1 && inputs < LIMIT_COUNT) {
            setInputAndChangeStore(PRODUCT_ID, "INCREASE", 1)
        } else {
            console.error("[cart] 수량증가시 입력범위 초과")
            alert(`구매가능한 상품 수를 초과하였습니다. (${LIMIT_COUNT}개)`)
        }
    }

    const decrease = () => {
        if (inputs > 1 && inputs <= LIMIT_COUNT) {
            setInputAndChangeStore(PRODUCT_ID, "DECREASE", 1)
        } else {
            console.error("[cart] 수량감소시 입력범위 초과")
            alert("1 이하는 입력할 수 없습니다.")
        }
    }

    return (
        <QuantityCounterDiv>
            <button onClick={decrease}>-</button>
            <input
                type="text"
                pattern="[0-9]*"
                title="0~9사이의 숫자조합만 입력 가능"
                value={inputs}
                min="1"
                max="100"
                onChange={onChange}
            />

            <button onClick={increase}>+</button>
        </QuantityCounterDiv>
    )
}

export default QuantityCounter
