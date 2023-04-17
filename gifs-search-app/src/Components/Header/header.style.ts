import styled from 'styled-components';
import background from '../../images/bg.jpg';

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const HeaderStyled = styled.header`
    width: 100%;
    height: 55vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: space-evenly;
    
    .logo{
        width: 165px;
        height: 25px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        background-color: ${(props) => props.theme.colourBlack};
        span{
            text-transform: uppercase;
            color: ${(props) => props.theme.colourGreyDark};
            font-size: .7rem;
            font-weight: 600;
        }
        svg{
            width: 4rem;
        }
    }

    form{
        width: 90%;
        height: 60px;
        display: flex;
        align-items: center;

     ${media.laptop} {
        width: 60%;
     }  
                
    
        .input-control{
            position: relative;
            width: 100%;
            border: 4px solid ${props => props.theme.colourDarkBlue2};
            border-radius: 35px;
           
            input{
                position: relative;
                z-index: 10;
                width: 100%;
                height: 60px;
                font-family: inherit;
                font-size: inherit;
                padding: 1rem 2rem;
                border-radius: 35px;
                :hover {
                     background-color: ${props => props.theme.colourGrey};
                 }
            }            

            .submit-btn{
                height: 61px;
                width: 61px;
                position: absolute;
                top: 50%;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-50%);
                color: ${(props) => props.theme.colourWhite};
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                z-index: 10; 
                border-radius: 50%;
                background:${props => props.theme.colourDarkBlue2};
                :hover {
                    background-color: ${props => props.theme.colourDarkBlue2};
                 }
            }
        }
    }
    
  .fetch-btns{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    ${media.laptop} {
        flex-direction: row;
        width: 60%;        
     }
  }
` 
;