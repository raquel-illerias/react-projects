import styled from "styled-components";
import { Box, Typography } from "@mui/material";

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
    margin-bottom: 2rem;
`

export const TitleBox = styled(Box)`
    &.MuiBox-root {
        min-width:10rem;
        color: #028ecc;
        border-radius: 2px;
        display:flex;
        align-items:center;
        justify-content:center;  
        margin: 1.5rem 0 4rem;
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