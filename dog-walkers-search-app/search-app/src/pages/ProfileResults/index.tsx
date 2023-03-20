import { ContainerStyled, HeaderContainer, HeaderOne, ProfileContainer, MapContainer, ResultsWrapper } from "./profileResults.style";

export default function ProfileResults() {

    return (
        <>
            <ContainerStyled>
                <HeaderContainer>
                    <HeaderOne>Nearest dog walkers</HeaderOne>
                </HeaderContainer>
                <ResultsWrapper>
                    <ProfileContainer>

                    </ProfileContainer>
                    <MapContainer>
                        
                    </MapContainer>
                </ResultsWrapper>
            </ContainerStyled>
        </>
    )
}