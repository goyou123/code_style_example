/* 타입스크립트에서 styled-components를 사용하려면  DefaultTheme 형식과 themes.ts 의 타입을 맞춰야 한다. */
import { DefaultTheme } from "styled-components"

const fonts = {
    f12: "1.2rem",
    f14: "1.4rem",
    f16: "1.6rem",
    f18: "1.8rem",
    f20: "2.0rem",
    f24: "2.4rem",
    f26: "2.6rem",
    f28: "2.8rem",
    f30: "3.0rem",
    f34: "3.4rem",
}

/* 공통으로 사용되는 color 정의 */
const colors = {
    transparent: "transparent",
    white: "#FFFFFF",
    black: "#000000",
    gray: "#CCCCCC",
    red: "#FF0000",
}

/* 라이트 모드에서만 사용되는 color 정의 */
const onlyLight = {
    text: "#222222",
}

/* 다크모드에서만 사용되는 color 정의 */
const onlyDark = {
    text: "#222222",
}

/* 최종 라이트모드에서 사용되는 컬러 정의 */
const lightThemeColors = {
    colors: {
        ...colors,
        ...onlyLight,
    },
}

/* 최종 다크모드에서 사용되는 컬러 정의 */
const darkThemeColors = {
    colors: {
        ...colors,
        ...onlyDark,
    },
}

const darkTheme: DefaultTheme = {
    ...darkThemeColors,
    fonts,
}

const lightTheme: DefaultTheme = {
    ...lightThemeColors,
    fonts,
}

export { darkTheme, lightTheme }
