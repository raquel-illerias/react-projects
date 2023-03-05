import styled from "styled-components";
import { Tab, Box } from "@mui/material";

export const BoxContainer = styled(Box)`
    -webkit-box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
    box-shadow: 0px 12px 24px -14px rgba(0,0,0,0.75);
`

export const TabStyled = styled(Tab)`
    &.MuiTab-root.Mui-selected {
        color:#e91c37;
        font-weight: 600;
        font-family: 'Roboto Condensed', sans-serif;
    }
`

