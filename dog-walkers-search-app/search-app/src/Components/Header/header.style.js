import styled from "styled-components";

const media = {
    tablet: '@media screen and (min-width: 481px)',
    laptop: '@media screen and (min-width: 769px)',
    desktop: '@media screen and (min-width: 1025px)'
}

export const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: #fff;
    font-size: 2.3rem;
    position: sticky;
    top: 0;
    z-index: 1052;
    border-radius: 0 0 3px 3px;
    -webkit-box-shadow: 0px 7px 25px -11px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 7px 25px -11px rgba(0,0,0,0.75);
    box-shadow: 0px 7px 25px -11px rgba(0,0,0,0.75);

    ${media.laptop} {
        height: 100px;
    }
`

export const Figure = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const LogoImage = styled.img`
    width: 120px;
    height: 70px;
    object-fit: contain;
    ${media.laptop} {
        width: 150px;
        height: 100px;

    }
    margin-left: 1rem;
`

