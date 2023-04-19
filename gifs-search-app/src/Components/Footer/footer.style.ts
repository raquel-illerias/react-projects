import styled from "styled-components";

export const FooterContainer = styled.div`
        width: 100%;
        height: 150px;
        background-color: ${(props) => props.theme.colourDarkBlue2};
        color: ${(props) => props.theme.colourWhite};
        display:flex;
        justify-content: center;
        align-items: center;

        svg {
            width: 35px;
            height: 35px;
            cursor: pointer;
            margin: 0 1rem;
        }
`
