import styled from "styled-components";
import { Paper, FormControl, Box } from "@mui/material";

export const FormStyled = styled(FormControl)`
   max-width: 80px; 
`

export const PaperStyled = styled(Paper)`
    max-width: 200;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 1rem;
`

export const KcalContainer = styled(Box)`
    &.MuiBox-root{
        margin-left: 1rem;
        color: #656870;
    }
    
`

