import styled from "styled-components";
import { Stepper, Box, StepLabel, Button } from "@mui/material";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const BoxContainer = styled(Box)`
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const StepperStyled = styled(Stepper)`
    min-height: 50px;
    min-width: 50px;
    margin: 1rem 2rem; 
    display: flex;
   &.MuiStepper-root {
    & .MuiStep-root{
       & .MuiStepLabel-root {
        & .MuiStepLabel-iconContainer.Mui-active {
         & .MuiSvgIcon-root{
            color: #028ecc;
            }  
            
        }
       }
    }
   }
`

export const StepLabelStyled = styled(StepLabel)`
        &.MuiStepLabel-root {
            & .MuiStepLabel-labelContainer {
                & .MuiStepLabel-label {
                    font-size: .9rem;
                    font-weight: 600;
                    font-family: 'Roboto Condensed', sans-serif;

                    ${media.laptop} {
                        font-size: 1.2rem;
                    }
                } 
                 
            }

            & .MuiStepIcon-text {
                font-weight: 600;
                font-family: 'Roboto Condensed', sans-serif;
                font-size: 1rem;

                ${media.laptop} {
                        font-size: 1.2rem;
                    }
                } 

            & .MuiSvgIcon-root {
                width: 20px;
                height: 20px;
                ${media.laptop} {
                    width: 30px;
                height: 30px;
                    }
            }
        }
`

export const FragmentContainer = styled(Box)`
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
`

export const ButtonContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    height: 100px;
    width: 90%;
    padding: 0 1rem;
`

export const ConfirmButton = styled(Button)`
    width: 150px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content:center;

    &.confirmButton.MuiButtonBase-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        border-radius: 25px;
        background-color: #53c777;
        color: #fff;
        font-size: 1.2rem;
        & .MuiTouchRipple-root {
       color: #459c9a;
        }  
        &:hover{
                background-color:#53d787;
    } 
}
&:disabled {
    opacity: 0.5;
    background-color: '#CCCCCC';
    color: '#999999';
  }
`

export const BackButton = styled(Button)`
    width: 120px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content:center;

    &.backButton.MuiButtonBase-root {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        border-radius: 25px;
        color: #028ecc;
        font-size: 1.2rem;
        & .MuiTouchRipple-root {
       color: #459c9a;
        }  
        &:hover{
                background-color:#f5f5f5;
    } 
}
`