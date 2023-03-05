import { Typography } from "@mui/material";
import { FooterContainer } from "./footer.style";


export default function Footer() {
    return(
        <>
            <FooterContainer elevation={0}>
                    <Typography variant="h6" component={"h6"}>Raquel Illerias | All rights Reserved © 2023</Typography>
            </FooterContainer>
        </>
    )
}