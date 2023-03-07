import styled from "styled-components";
import { Box, TextField, Typography } from "@mui/material";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const FormContainer = styled(Box)`
    width: 100vw;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleBox = styled(Box)`
    &.MuiBox-root {
        min-width:10rem;
        color: #028ecc;
        border-radius: 2px;
        display:flex;
        align-items:center;
        justify-content:center;  
    }
`

export const Title = styled(Typography)`
    &.MuiTypography-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        font-size: 2.1rem;
        text-align: center;

        ${media.laptop} {
        font-size: 2.8rem;
        }
    }
`

export const Ornament = styled.img`
    width: 80px;
    height: 12px;
`

export const FormWrapper = styled(Box)`
     width: 100%;
     min-height: 150px;
     margin: 2rem 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;
     text-align: center;
`

export const TextFieldStyled = styled(TextField)`
    &.MuiFormControl-root {
        width: 280px;
        margin: 1rem 0;
        background-color: #fff;

        ${media.laptop} {
            width: 500px;
        }
    }
`

export const TotalPrice = styled(Typography)`
    &.MuiTypography-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 2.1rem;
        text-align: center;

        ${media.laptop} {
        font-size: 2.8rem;
        }
    }
`
