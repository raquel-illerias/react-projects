import styled from "styled-components";
import { Paper } from "@mui/material";
import { Box, TextField } from "@mui/material";
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const FormContainer = styled(Paper)`
    width: 90%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    ${media.tablet} {   
        width: 80%;
    }
    ${media.laptop} {
        width: 70%;
    }
    ${media.desktop} {
        width: 50%;
    }
`

export const FormWrapper = styled(Box)`

    &.MuiBox-root {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        text-align: center;
        margin: 2rem;

        .header__three{
            font-size: 1.7rem;
            margin-bottom: 2rem;      
            ${media.laptop} {
            font-size: 2rem;
            }
     }
    }    
`

export const InputContainer = styled.div`
    width: 100%;
    min-height: 30px;
    text-align: start;
    font-size: .8rem;
    margin-bottom: 2rem;

    .input__label {
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: .3rem;
    }
 
    .end {
        display: none;           
        }

    ${media.laptop} {
            .end {
                display: block;
                visibility: hidden;                
            }
        }
`

export const DateStartContainer = styled.div`
    width: 100%;
    min-height: 30px;
    text-align: start;
    font-size: .8rem;

    .input__label {
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: .3rem;
    }
`

export const TextFieldStyled = styled(TextField)`
    &.MuiFormControl-root {
        width: 100%;
        background-color: #fff;
        margin-top: .3rem;
    }
`

export const DatePickerContainer = styled(Box)`
    &.MuiBox-root {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        ${media.laptop} {
            flex-direction: row;
        }
    }  
`

export const DateWrapper = styled(Box)`
    &.MuiBox-root{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: start;
        font-size: .9rem;
    }
`

export const ArrowForward = styled(ArrowForwardIcon)`
    width: 20px;
    height: 20px;
    &.MuiSvgIcon-root {
        fill: #969696;
        margin-left: .3rem;
    }
`

export const CheckboxWrapper = styled.div`
    width: 100%;
`

export const ButtonSearch = styled(Button)`
    width: 100%;
    height: 55px;
    &.MuiButton-root {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 25px;
        background-color: #729aff;

        &:hover{
            background-color: #4979d9;
        }
    }
`




