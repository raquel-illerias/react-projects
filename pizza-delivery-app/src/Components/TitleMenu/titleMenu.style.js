import styled from "styled-components";
import { Paper, Typography } from "@mui/material"
import { Container, Box } from "@mui/system";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const TitleContainer = styled(Paper)`
    &.MuiPaper-root {
        margin: 2rem 0;  
        background-color: #f3f3f3;        
    } 
`

export const TitleWrapper = styled(Container)`
    &.MuiContainer-root {
        min-height:10vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        text-transform: uppercase;
    }
`

export const TitleBox = styled(Box)`
    &.MuiBox-root {
        min-width:10rem;
        color: #028ecc;
        border-radius: 2px;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align: center; 
        margin-bottom: 1.5rem;
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

export const Speciality = styled(Typography)`
    &.MuiTypography-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        color: #e91c37;
        font-size: 1.4rem;
        text-align: center;
        ${media.laptop} {
        font-size: 2rem;
    }
    }
`
