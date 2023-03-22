import { PaginationContainer, WrapperStyled, ContainerStyled, HeaderContainer, HeaderOne, ProfileContainer, MapContainer, ResultsWrapper, MapWrapper } from "./profileResults.style";
import { Pagination } from "@mui/material";
import PersonaCard from "../../Components/Personas";
import Profiles from '../../data';
import { useCheckboxStore } from "../../stores/checkbox.store";

export default function ProfileResults() {

    const {currentPage, setCurrentPage} = useCheckboxStore((state) => state);
    const personasPerPage = 5;

    const personaSlice = (page: number) => {
        const startIndex = (page - 1) * personasPerPage;
        const endIndex = startIndex + personasPerPage;
        return Profiles.slice(startIndex, endIndex);
    }

    const persona = personaSlice(currentPage).map(profile => {
       
        const personaIndex: number = Profiles.indexOf(profile) + 1

        return (
            <PersonaCard key={profile.id} persona={profile} personaIndex={personaIndex}></PersonaCard>
        )
    })

    const pageCount = Math.ceil(Profiles.length / personasPerPage);

    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    }

    return (
        <>
            <ContainerStyled>
                <WrapperStyled>
                    <HeaderContainer>
                        <HeaderOne>Nearest dog walkers</HeaderOne>
                    </HeaderContainer>
                    <ResultsWrapper>
                        <ProfileContainer >
                            {persona}
                            <PaginationContainer>
                                <Pagination count={pageCount} page={currentPage} onChange={handlePageChange} shape="rounded" siblingCount={0} boundaryCount={1} />
                            </PaginationContainer>
                        </ProfileContainer >
                        <MapContainer>
                            <MapWrapper>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni rerum quasi praesentium dolor cum vitae explicabo quibusdam placeat quaerat quas aspernatur omnis ad, quam enim quae laudantium magnam voluptatibus?</p>
                            </MapWrapper>
                        </MapContainer>
                    </ResultsWrapper>
                </WrapperStyled>
            </ContainerStyled>
        </>
    )
}