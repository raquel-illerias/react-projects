import styled from 'styled-components'

export const TrendingStyled = styled.article`
    width: 85%;
    margin: 4rem 0;
    h2{
        height: 60px;
        border-bottom: 4px solid ${(props) => props.theme.colourDarkBlue2};
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.colourDarkBlue2};
        display: flex;
        align-items: center;
        gap: 1rem;
        i{
        color: ${props => props.theme.colourGreen2}
        }
    }
    .my-masonry-grid {
        display: -webkit-box; 
        display: -ms-flexbox; 
        display: flex;
        margin-left: -20px;
        width: auto;
    }
    .my-masonry-grid_column {
        padding-left: 20px; 
        background-clip: padding-box;
    }

    .my-masonry-grid_column > div { 
        margin-bottom: 15px;
    }
    `;