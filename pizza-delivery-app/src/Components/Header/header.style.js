import styled from "styled-components";
import { Link } from "react-router-dom";
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp';
import { Button } from "@mui/material";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: #393336;
    color: #fff;
    font-size: 2.3rem;
    position: sticky;
    top: 0;
    z-index: 1052;

    ${media.laptop} {
        height: 100px;
    }
`

export const Figure = styled.figure`
    width: 200px;
    height: 100%;
`

export const LogoWrapper = styled(Link)`
    width: 100%;
    height: 100%;
`

export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`
export const BasketWrapper = styled(Link)`
    height: 100%;
    display:flex;
    align-items: center;
`

export const BasketButton = styled(Button)`
    width: 70px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

    &.buttonClass.MuiButtonBase-root {
        border-radius: 25px;
        position: absolute;
        right: 5px;
        color: #fff;
        margin-right: 0.3rem;
        & .MuiTouchRipple-root {
       color: #459c9a;
        }  
    } 

    ${media.laptop} {
        width: 220px;
        height: 48px;
         
        &.buttonClass.MuiButtonBase-root {
            background-color: #53c777;
            color: #fff;
            display:flex;
            justify-content:space-around;
            flex-direction: row; 
            margin-right: 1.5rem;
                
            &:hover{
                background-color:#53d787;
        }
        }  
    }
`

export const BasketIcon = styled(ShoppingBasketSharpIcon)`
    transform: scale(1);
`

export const CountWrapper = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 40px;

    ${media.laptop} {
        top: 9px;
        left: 35px;
    }
`

export const CountIcon = styled.span`
   color: #000;
   font-weight: 600;
   font-size: .8rem;

   ${media.laptop} { 
    color: #53c777;
   }
`

export const BasketName = styled.span`
    font-size: 1.1rem;
    font-weight: 500; 
    display: none;

    ${media.laptop} {
        display: inline;
    }
`

export const BasketPrice = styled.span`
    font-size: 1rem;
    font-weight: 700;

    ${media.laptop} {
        font-size: 1.2rem;
    }
`

