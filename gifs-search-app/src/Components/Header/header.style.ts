import styled from 'styled-components'


export const HeaderStyled = styled.header`
    padding: 2rem 4.5rem;
    background-color: ${(props) => props.theme.colourBg2};
    display: flex;
    flex-direction: column;   
    gap: 2rem;
    
    .logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 1rem;
        span{
            text-transform: uppercase;
            color: ${(props) => props.theme.colourGrey};
            font-size: .6rem;
        }
        svg{
            width: 5rem;
        }
    }

    form{
        width: 100%;
        padding: 0 15rem;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1300px){
        padding: 0 10rem;
    }
        .input-control{
            position: relative;
            width: 100%;
            input{
                position: relative;
                z-index: 10;
                width: 100%;
                font-family: inherit;
                font-size: inherit;
                padding: 1rem 2rem;
                outline: none;
                border: none;
                border-radius: 35px;
            }
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                left: -.3rem;
                transform: translateY(-50%);
                width: 100%;
                height: 100%;
                background: linear-gradient(45deg, rgb(153, 51, 255) 0%, rgb(255, 102, 102) 100%);
                background-size: 400% 400%;
                z-index: 1;
                padding: .3rem;
                transform: scale(0);
                border-radius: 1rem;
                transition: all .3s ease;
                animation: gradient 7s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }
            }
            &:hover::after, &:focus-within::after{
                transform: scale(1) translateY(-50%);
            }

            .submit-btn{
                position: absolute;
                top: 50%;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transform: translateY(-50%);
                border: none;
                outline: none;
                color: ${(props) => props.theme.colourWhite};
                font-size: 1.2rem;
                font-weight: 600;
                cursor: pointer;
                z-index: 10;
                height: 100%;
                padding: 0 1rem;
                border-radius: 50%;
                background: linear-gradient(to right,
                    ${props => props.theme.colourPurple},
                    ${props => props.theme.colourSalmon}
                );
                background-size: 400% 400%;
                animation: gradient 3s ease-in-out infinite;
                @keyframes gradient{
                    0%{
                        background-position: 0% 50%;
                    }
                    50%{
                        background-position: 100% 50%;
                    }
                    100%{
                        background-position: 0% 50%;
                    }
                }

                i{
                    font-size: 1.8rem;
                    color: white;
                }
            }
        }
    }
`;
