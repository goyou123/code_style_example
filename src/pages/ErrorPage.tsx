import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ErrorPage() {
    const navigation = useNavigate()

    useEffect(() => {
        navigation("/products")
    }, [])
    return <div>ERROR 404!</div>
}

export default ErrorPage
