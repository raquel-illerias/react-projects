import styled from 'styled-components'

export const SearchStyled = styled.article`
    padding: 2rem;
    background: ${(props) => props.theme.colourBg2};
    border-radius: 1rem;
    h2{
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colourWhite};
        display: flex;
        align-items: center;
        gap: 1rem;
        i{
            background: linear-gradient(to right, 
                ${(props) => props.theme.colourBlue2}, 
                ${(props) => props.theme.colourGreen2}
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }`