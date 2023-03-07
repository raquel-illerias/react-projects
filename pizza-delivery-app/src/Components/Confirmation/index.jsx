import { FormContainer, TitleBox, Title } from "./confirmation.style";

export default function Confirmation() {

    return (
        <>
            <FormContainer>
                <TitleBox>
                    <Title variant="h3" component={"h2"} mt={1.5} sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>
                        YOUR ORDER IS ON THE WAY!
                    </Title>
                </TitleBox>
               <img src={require("../../images/delivery.webp")} alt="" width={"200px"} />
            </FormContainer>
        </>
    )
}