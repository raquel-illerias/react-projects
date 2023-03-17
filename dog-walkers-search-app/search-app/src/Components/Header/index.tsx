import { Figure, LogoImage, StyledHeader } from "./header.style"


export default function Header() {

    return (
        <>
            <StyledHeader>
                <Figure>
                        <LogoImage
                            src= {require("../../images/happy-paws-logo.webp")}
                        />
                </Figure>
            </StyledHeader>

        </>
    )
}