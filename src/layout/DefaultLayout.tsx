import React from "react"
import MainRouter, { ROUTES } from "routes/MainRouter"

//css
import { ThemeProvider } from "styled-components"
import GlobalStyle from "styles/GlobalStyle"
import { lightTheme as basicTheme } from "styles/themes"

//components
import NavigationBar from "./NavigationBar/NavigationBar"

function DefaultLayout() {
    const theme = basicTheme
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavigationBar routes={ROUTES} />
            <MainRouter />
        </ThemeProvider>
    )
}

export default DefaultLayout
