import styled from "styled-components";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
    background-color: #fff;
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
    height: 150vh;
    background-color: #f4f5f6;

    ${media.laptop} {
        display: flex;
    }
`

export const ProfileContainer = styled.div`
    width: 100%;
    height: 150vh;
    background-color: #f4f5f6;

    ${media.laptop} {
        width: 60%;
    }
`

export const ProfileWrapper = styled.div`
    max-width: 100%;
    height: 160px;
    background-color: #fff;
    margin: 1rem 1rem 0;
    border-radius: 3px;
    padding: 1rem;
`

export const ConfirmedDates = styled.div`
    max-width: 100%;
    height: 25px;
    border-radius: 3px;
    background-color: #f1fdf6;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: .5rem;
`

export const ConfirmedText = styled.span`
    font-size: .75rem;
    margin-left: .6rem;
`

export const CheckIcon = styled(CheckCircleOutlineIcon)`
    &.MuiSvgIcon-root {
        height: 20px;
        width: 20px;;
        fill: #2d8e5d;
        margin-left: .6rem;
    }  
`

export const ProfileDataContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const AvatarContainer = styled.div`
    background-color: gold;
    height: 80px;
    width: 80px;
    border-radius: 50%;
`
export const ProfileName = styled.h2`
    font-size: 1.7rem;
`
export const WalkingPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .price__text {
        font-size: .8rem;
        color: #676d73;
    }

    .price__number {
        font-size: 1.4rem;
        color: #bb4f12;
    }
`

export const MapContainer = styled.div`
    width: 100%;
    height: 30vh;
    background-color: coral;

    ${media.laptop} {
        width: 40%;
        height: 150vh;
        position: relative;
    }
`

export const MapWrapper = styled.div`
    width: 100%;
    height: 30vh;
    background-color: gold;

    ${media.laptop} {
        width: 40%;
        position: -webkit-sticky;
        position: sticky;
        top: 100px;
        right: 0;
    }
`