import { FormContainer, Title, TitleBox, Ornament, FormWrapper, TotalPrice, TextFieldStyled} from "../CheckoutForm/checkoutForm.style"
import { Typography, Container } from "@mui/material";

export default function CheckoutForm({ basket }) {

    return (
        <>
            <FormContainer>

                <TitleBox>
                    <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                    <Title variant="h3" component={"h2"} mt={1.5} sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>
                        MY DETAILS
                    </Title>
                    <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                </TitleBox>
                <Container maxWidth="sm">
                    <FormWrapper>
                        <TextFieldStyled id="outlined-basic" label="Name" size="small" color="secondary" variant="outlined" required />
                        <TextFieldStyled id="outlined-basic" label="Phone" size="small" color="secondary" variant="outlined" required />
                        <TextFieldStyled id="outlined-basic" label="Email Address" size="small" color="secondary" variant="outlined" />
                        <TextFieldStyled id="outlined-basic" label="Postcode" size="small" color="secondary" variant="outlined" required />
                        <TextFieldStyled id="outlined-basic" label="Address" size="small" color="secondary" variant="outlined" required />
                    </FormWrapper>
                </Container>
                <Container>
                    <FormWrapper>
                        <Typography variant="h4" component={"h3"} mb={1} sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>THAT'S GREAT! PLEASE PAY:</Typography>
                        <TitleBox>
                            <Ornament src={require("../../images/ornament-pizza.webp")} alt="" />
                            <TotalPrice variant="h4" component={"h3"} color={"#e31837"} mx={1.5} mb={1} sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>
                                £{basket.totalPrice.toFixed(2)}
                            </TotalPrice>
                            <Ornament src={require("../../images/ornament-pizza.webp")} alt="" />
                        </TitleBox>
                        <Typography variant="body2" component={"p"} mb={5} sx={{ fontFamily: 'Roboto Condensed, sans-serif' }}>Payment in cash upon delivery</Typography>
                    </FormWrapper>
                </Container>
            </FormContainer>
        </>

    )
}