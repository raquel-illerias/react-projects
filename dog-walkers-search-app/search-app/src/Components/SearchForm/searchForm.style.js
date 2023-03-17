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

export const ContainerStyled = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 120px;
    margin: 5rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #009950;
`

export const HeaderOne = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    
    ${media.tablet} {
        font-size: 2.2rem;
    }
    ${media.laptop} {
        font-size: 3rem;
    }
`

export const HeaderTwo = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    ${media.tablet} {
        font-size: 1.9rem;
    }
    ${media.laptop} {
        font-size: 2.7rem;
    }
`

export const FormContainer = styled(Paper)`
    width: 90%;
    min-height: 20vh;
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
     width: 100%;
     margin: 1.5rem 0;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: space-evenly;
     text-align: center;
`

export const InputContainer = styled.div`
    height: 80px;
    text-align: start;
    font-size: .9rem;
    margin: 0 2rem 2rem;
`

export const TextFieldStyled = styled(TextField)`
    &.MuiFormControl-root {
        width: 250px;
        margin-top: .5rem;
        background-color: #fff;

        ${media.tablet} {
            width: 350px;
        }
        ${media.laptop} {
            width: 400px;
        }
    }
`

export const DatePickerContainer = styled(Box)`
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${media.laptop} {
          flex-direction: row;
        }
`

export const DateWrapper = styled(Box)`
    width: 242px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: start;
    font-size: .9rem;
`

export const ArrowForward = styled(ArrowForwardIcon)`
    width: 20px;
    height: 20px;
    margin: 0 .5rem;
    &.MuiSvgIcon-root {
        fill: #969696;
    }
`

export const CheckBoxContainer = styled.div`
    width: 100%;
    height: 80px;
    text-align: center;  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
`

export const CheckBoxWrapper = styled.div`
    width: 80px;
    height: 65px;
    background-color: #fff;
    border-radius: 4px;
    border: 2px solid #e2e2e2;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .9rem;
    color: #676767;
    cursor: pointer;
    position: relative;
`

export const CheckBoxLabel = styled.label`
    line-height: 1.8rem;
`

export const CheckBoxInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    display: none; 
`
export const ButtonSearch = styled(Button)`
    width: 200px;
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




