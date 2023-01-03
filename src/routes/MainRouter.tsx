import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"

import CartPage from "pages/CartPage/CartPage"
import ProductsPage from "pages/ProductPage/ProductsPage"
import ErrorPage from "pages/ErrorPage"

export interface RouteType {
    name: string
    path: string
}

export const ROUTES: RouteType[] = [
    {
        name: "상품목록",
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
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default MainRouter
