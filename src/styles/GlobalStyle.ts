import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle` 

  ${reset} 

  a{
      text-decoration: none;
      color: inherit;
  }
  *{
      box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  html  {
    font-size: 62.5%;

  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    font-weight: 400;
    overflow: hidden;
}
`

export default GlobalStyles
