import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 100%;
    min-height:10vh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    gap: 50px 30px;
    justify-content: center;
    margin-bottom: 160px;
`

export const ToggleContainer = styled.div`
    width: 100%;
    height: 8vh;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;
    color: #75787f;
`