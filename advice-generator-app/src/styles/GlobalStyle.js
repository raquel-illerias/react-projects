import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        padding: 0;
        border: none;
        outline: none;
    }
    body{
        font-family: 'Nunito', sans-serif;
        min-height: 100vh;
        font-size: 1.2rem;
        background-color: hsl(218, 23%, 16%);
    }
`;