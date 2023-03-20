import SearchForm from "../../Components/SearchForm";
//import styled components
import { ContainerStyled, HeaderContainer, HeaderOne, HeaderTwo } from "./homepage.style";



export default function Homepage() {

    return (
        <>
            <ContainerStyled>
                <HeaderContainer>
                    <HeaderOne>Loving Pet Care in London</HeaderOne>
                    <HeaderTwo>Book trusted dog walkers</HeaderTwo>
                </HeaderContainer>
                <SearchForm></SearchForm>
            </ContainerStyled>
        </>
    )
}