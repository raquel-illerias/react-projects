import styled from "styled-components";

export const AppStyled = styled.div`
min-height: 100vh;
background-color: ${props => props.theme.colourBg1};

.fetch-btns{
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
}

main{
  padding: 2rem 8rem;
  @media screen and (max-width: 1300px){
    padding: 2rem 4rem;
  }
}
`;