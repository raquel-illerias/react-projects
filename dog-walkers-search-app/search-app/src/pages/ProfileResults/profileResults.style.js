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
    background-color: #fbfbfb;
`

export const WrapperStyled = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fbfbfb;

    ${media.laptop} {
        width: 80%;
    }

    ${media.desktop} {
        width: 75%;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 120px;
    margin: 2rem 0 1rem;
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
    min-height: 150vh;
    background-color: #f4f5f6;
    padding: 0 1rem 1rem 1rem;    

    ${media.laptop} {
        display: flex;
        padding: 0 1rem 1rem;
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    min-height: 150vh;
    background-color: #f4f5f6;
    display: flex;
    flex-direction: column;

    ${media.laptop} {
        width: 60%;
    }
`

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`

export const MapContainer = styled.div`
    width: 100%;
    height: inherit;
    border-radius: 3px;
    margin-top: 1rem;
    background-color: #f4f5f6;

    ${media.laptop} {
        width: 40%;
        position: relative;        
    }
`

export const MapWrapper = styled.div`
    width: 100%;
    height: 55vh;
    border-radius: 3px;
    background-color: gold;

    ${media.laptop} {
        width: 100%;
        -webkit-position: sticky;
        position: sticky;
        top: 100px;
        right: 0;
    }
`