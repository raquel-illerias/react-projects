import { PersonaCardProps } from "./interface"
import { ProfileWrapper, ProfileDataContainer, AvatarContainer, ProfileName, WalkingPrice, ConfirmedDates, ConfirmedText, CheckIcon } from "./personas.style"


export default function PersonaCard({ persona, personaIndex }: PersonaCardProps) {

    return (
        <>
            <ProfileWrapper>
                <ConfirmedDates>
                    <CheckIcon></CheckIcon>
                    <ConfirmedText>Confirmed availability: 21 Mar - 25 Mar</ConfirmedText>
                </ConfirmedDates>
                <ProfileDataContainer>
                    <AvatarContainer src={persona.avatar} alt="" />
                    <ProfileName>{personaIndex}. {persona.name}</ProfileName>
                    <WalkingPrice>
                        <span className="price__text">from</span>
                        <span className="price__number">{persona.price}</span>
                        <span className="price__text">per walk</span>
                    </WalkingPrice>
                </ProfileDataContainer>
            </ProfileWrapper>
        </>
    )
}