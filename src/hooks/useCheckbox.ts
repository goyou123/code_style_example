import { ChangeEvent, useState, useEffect } from "react"

/* @@ checkbox들을 관리해주는 커스텀 훅
 *  (filterArray === cartItems)
 *  현재는 filterArray에 cartItems형태의 배열이 들어왔을때만 사용가능하다.
 */
const useCheckBox = (filterArray: any[]) => {
    const [checkItemsArray, _setCheckItemsArray] = useState<number[]>([])

    useEffect(() => {
        // 초기 아이템 리스트 전체선택
        const idArray: number[] = []
        filterArray.forEach((el) => idArray.push(el.item_no))
        _setCheckItemsArray(idArray)
    }, [])

    /* 체크박스 전체 선택 */
    const handleAllCheck = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target
        if (checked) {
            const newArray: number[] = []
            filterArray.forEach((el) => newArray.push(el.item_no))
            _setCheckItemsArray(newArray)
        } else {
            _setCheckItemsArray([])
        }
    }

    /* 체크박스 단일 개체 선택 시 실행될 함수 */
    const handleSingleCheck = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        const { checked } = e.target
        if (checked) {
            _setCheckItemsArray([...checkItemsArray, id])
        } else {
            // 체크 해제
            _setCheckItemsArray(checkItemsArray.filter((el) => el !== id))
        }
    }

    return { checkItemsArray, _setCheckItemsArray, handleAllCheck, handleSingleCheck }
}

export default useCheckBox
