import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
    box-sizing: border-box;
    list-style-type: none;
}

body {
    width: 100%;
    min-height: 100vh;
    font-size: 10px;
    background-color: #fbfbfb;
    color: #000;
    font-family: 'Roboto Condensed', sans-serif;
}

ul[role="listbox"] {
    max-height: 190px;
    height: 100%;
    overflow-x: scroll;
}
`
export default GlobalStyles;
