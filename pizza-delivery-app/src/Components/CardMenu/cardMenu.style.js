import { Box, Typography, Paper, Button, Card} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";

export const PaperStyled = styled(Paper)`
    min-width: 280px;
    min-height: 300px; 
    background-color: "#fff";
`

export const BoxInfo = styled(Box)`
    height: 70px;
    display: flex;
    align-items: center;
    &.MuiBox-root {
        margin: .8rem;
    }
`

export const BoxStyled = styled(Box)`
     &.MuiBox-root {
        height: 70px;
        display: flex;
        justify-content: end;
        color: #459c9a;
        margin-right: 1rem;
     }
`

export const MealInfo = styled(Typography)`
    &.MuiTypography-root {
        color: #5c5c5c;
    }
`

export const MealImage = styled.img`
    width: 100%;
    object-fit: contain;
`

export const IconAdd = styled(AddIcon)`
    transform: scale(1.8);
    color: #fff;
`

export const CountIcon = styled.span`
   color: #fff;
`

export const FullCart = styled(Card)`
    width: 90%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`

export const ContainerLeft = styled(Box)`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: left;
`

export const ContainerRight = styled(Box)`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-right: 20px;
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