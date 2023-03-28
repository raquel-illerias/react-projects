import styled from "styled-components";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const ContainerStyled = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 120px;
    margin: 5rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color:#6e9aff;
`

export const HeaderOne = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    
    ${media.tablet} {
        font-size: 2.2rem;
    }
    ${media.laptop} {
        font-size: 3.3rem;
    }
`

export const HeaderTwo = styled.h2`
    font-size: 1.7rem;
    font-weight: 600;
    ${media.tablet} {
        font-size: 1.9rem;
    }
    ${media.laptop} {
        font-size: 3rem;
    }
`






