import styled from "styled-components";
import { Tab, Box } from "@mui/material";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const BoxContainer = styled(Box)`
    width: 100%;
    -webkit-box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
    position: sticky;
    top:70px;
    left: 0;
    z-index: 1052;

    ${media.laptop} {
        top: 100px;
    }
`

export const TabStyled = styled(Tab)`
    &.MuiTab-root {
        font-size: 1rem;
        ${media.laptop} {
            font-size: 1.5rem;
        }
    }
    &.MuiTab-root.Mui-selected {
        color:#e91c37;
        font-weight: 600;
        font-family: 'Roboto Condensed', sans-serif;
    }

   
`

