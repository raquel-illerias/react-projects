import styled from "styled-components";

export const AppStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colourBg1};

  main{
    width: 100%;
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;