import styled from "styled-components";
import { Box, Card, Button, Typography } from "@mui/material";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const SummaryContainer = styled(Box)`
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
        text-align: center; 
        margin-bottom: 1rem;
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

export const CountContainer = styled(Box)`
     min-width: 50px;
     margin: 2rem 0;
`

export const Ornament = styled.img`
    width: 80px;
    height: 12px;
`

export const ItemsContainer = styled(Box)`
     width: 90%;
     min-height: 200px;
     background-color:#e0eaef;
     margin: 2rem 0;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-evenly;

     ${media.laptop} {
        width: 70%;
     }
`

export const EmptyCart = styled(Card)`
    width: 90%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FullCart = styled(Card)`
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    ${media.tablet} {
        width: 90%;
        height: 110px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }
`

export const ContainerLeft = styled(Box)`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${media.tablet} { 
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: left;
        flex-direction: row;
    }
`

export const NameStyled = styled(Typography)`
    &.MuiTypography-root {
    font-size: 1.1rem;
    margin-top: 0.6rem;
    ${media.tablet} { 
        font-size: 1.2rem;
        margin-top: 0;
        margin-left: 2rem;
    }
    }  
`

export const ImageStyled = styled.img`
    height: 80px;
    margin-top: .6rem;
    ${media.tablet} { 
        height: 100%;
        margin-top: 0;
    }
`

export const ContainerRight = styled(Box)`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: .6rem;

    ${media.tablet} {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        padding-right: 20px; 
        margin-top: 1.2rem;
    }
`

export const RemoveButton = styled(Button)`
    width: 100px;
    height: 50px;
   
    &.MuiButton-root {
        font-size: 1.2rem;
        font-weight: 600;
        color: #028ecc;
        font-family: 'Roboto Condensed', sans-serif;
    }
`

export const TotalPriceContainer = styled(Box)`
     width: 90%;
     height: 120px;
     border-top: 1px solid #b8b8b8;
     border-bottom: 1px solid #b8b8b8;
     background-color:#ececec;
     margin: 2rem 0;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 1rem;
     ${media.laptop} {
        width: 70%;
     }
`

