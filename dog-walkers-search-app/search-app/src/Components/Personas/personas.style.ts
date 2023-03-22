import styled from "styled-components";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export const ProfileWrapper = styled.div`
    max-width: 100%;
    height: 160px;
    background-color: #fff;
    border-radius: 3px;
    margin-top: 1rem;
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
export const AvatarContainer = styled.img`
    background-color: #d3fcff;
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