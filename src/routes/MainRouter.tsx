import React from "react"
import { Route, Routes } from "react-router-dom"

import CartPage from "pages/CartPage"
import ProductsPage from "pages/ProductsPage"
import ErrorPage from "pages/ErrorPage"

export interface RouteType {
    name: string
    path: string
}

export const ROUTES: RouteType[] = [
    {
        name: "전체 상품",
        path: "/products",
    },
    {
        name: "장바구니",
        path: "/cart",
    },
]

function MainRouter() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}

export default MainRouter
