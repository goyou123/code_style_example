import React from "react"
import MainRouter, { ROUTES } from "routes/MainRouter"

//css
import { ThemeProvider } from "styled-components"
import GlobalStyle from "styles/GlobalStyle"
import { lightTheme as basicTheme } from "styles/themes"
import { MainLayoutDiv } from "layout/DefaultLayout/DefaultLayout.style"

//components
import NavigationBar from "layout/NavigationBar/NavigationBar"

function DefaultLayout() {
    const theme = basicTheme
    return (
        <ThemeProvider theme={theme}>
            <MainLayoutDiv>
                <GlobalStyle />
                <NavigationBar routes={ROUTES} />
                <MainRouter />
            </MainLayoutDiv>
        </ThemeProvider>
    )
}

export default DefaultLayout
