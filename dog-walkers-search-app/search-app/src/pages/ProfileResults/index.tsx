import { ProfileDataContainer, AvatarContainer, ProfileName, WalkingPrice, ContainerStyled, HeaderContainer, HeaderOne, ProfileContainer, MapContainer, ResultsWrapper, MapWrapper, ProfileWrapper, ConfirmedDates, ConfirmedText, CheckIcon } from "./profileResults.style";
import Profiles from '../../data'

export default function ProfileResults() {



    return (
        <>
            <ContainerStyled>
                <HeaderContainer>
                    <HeaderOne>Nearest dog walkers</HeaderOne>
                </HeaderContainer>
                <ResultsWrapper>
                    <ProfileContainer>
                        <ProfileWrapper>
                            <ConfirmedDates>
                                <CheckIcon></CheckIcon>
                                <ConfirmedText>Confirmed availability: 21 Mar - 25 Mar</ConfirmedText>
                            </ConfirmedDates>
                            <ProfileDataContainer>
                                <AvatarContainer></AvatarContainer>
                                <ProfileName>Ruby</ProfileName>
                                <WalkingPrice>
                                    <span className="price__text">from</span>
                                    <span className="price__number">£12</span>
                                    <span className="price__text">per walk</span>
                                </WalkingPrice>
                            </ProfileDataContainer>
                        </ProfileWrapper>
                    </ProfileContainer>
                    <MapContainer>
                        <MapWrapper>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus magni rerum quasi praesentium dolor cum vitae explicabo quibusdam placeat quaerat quas aspernatur omnis ad, quam enim quae laudantium magnam voluptatibus?</p>
                        </MapWrapper>
                    </MapContainer>
                </ResultsWrapper>
            </ContainerStyled>
        </>
    )
}