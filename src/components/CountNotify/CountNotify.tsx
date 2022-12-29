import React from "react"
// zustand
import { useBoundStore } from "store/useBoundStore"

//css
import { CountNotifyDiv } from "components/CountNotify/CountNotify.style"
function CountNotify() {
    const cartItems = useBoundStore((state) => state.cartItems)

    if (cartItems.length > 0) {
        return <CountNotifyDiv>{cartItems.length}</CountNotifyDiv>
    }
    return null
}

export default CountNotify
