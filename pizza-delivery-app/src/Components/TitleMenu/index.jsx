import { Typography } from "@mui/material";
import { TitleContainer, TitleWrapper, TitleBox, Ornament, Speciality } from "./titleMenu.style"

export default function TitleMenu({ title, speciality }) {
    return (
        <>
            <TitleContainer elevation={0} square>
                {title && <TitleWrapper maxWidth="sm">
                    <TitleBox>
                        <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                        <Typography variant="h2" component={"h2"} sx={{ fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                        <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                    </TitleBox>
                </TitleWrapper>
                }
                {speciality && <TitleWrapper maxWidth="sm">
                    <Ornament src={require("../../images/ornament-pizza.webp")} alt="" />
                    <Speciality variant="h4" component={"h3"}>
                        {speciality}
                    </Speciality>
                    <Ornament src={require("../../images/ornament-pizza.webp")} alt="" />
                </TitleWrapper>}
            </TitleContainer>

        </>
    )
}