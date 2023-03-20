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
    margin: 0 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color:#000;
`

export const HeaderOne = styled.h1`
    font-size: 1.3rem;
    font-weight: 700;
    
    ${media.tablet} {
        font-size: 1.6rem;
    }
    ${media.laptop} {
        font-size: 2rem;
    }
`

export const ResultsWrapper = styled.div`
    width: 100%;
    height: 150vh;
    background-color: yellow;

    ${media.laptop} {
        display: flex;
        position: relative;
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    height: 150vh;
    background-color: violet;

    ${media.laptop} {
        width: 60%;
    }
`

export const MapContainer = styled.div`
    width: 100%;
    height: 30vh;
    background-color: goldenrod;

    ${media.laptop} {
        width: 40%;
        position: fixed;
        top: 190;
        right: 0;
        margin-bottom: 3rem;
    }
`