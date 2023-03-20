import styled from "styled-components";
import { Paper } from "@mui/material";

export const FooterContainer = styled(Paper)`
    &.MuiPaper-root {
        width: 100%;
        height: 150px;
        background-color: #edfdf3;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 4rem;
    }
`

export const SvgStyled = styled.svg`
    width: 35px;
    height: 35px;
    cursor: pointer;
    margin: 0 1rem;
`