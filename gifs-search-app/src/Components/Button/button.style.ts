import styled from 'styled-components'

export const ButtonStyled = styled.button`
  width: 100%;
  height: 55px;
  color: ${props => props.theme.colourBlack};
  cursor: pointer;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 35px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: ${props => props.theme.colourWhite};
  border: 4px solid ${props => props.theme.colourDarkBlue2};

  :hover {
        background-color: ${props => props.theme.colourGrey};
    }
`;



