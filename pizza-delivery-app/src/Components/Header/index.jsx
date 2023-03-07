import { useState, useEffect } from "react";
import { BasketButton, BasketIcon, BasketPrice, BasketName, Figure, LogoImage, LogoWrapper, StyledHeader, CountIcon, CountWrapper, BasketWrapper } from "./header.style"


export default function Header({ basket }) {

    //watch window resizing 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function () {
            window.removeEventListener("resize", watchWidth)
        }
    }, [windowWidth])

    const priceZero = 0.00;


    return (
        <>
            <StyledHeader>
                <Figure>
                    <LogoWrapper to="/">
                        <LogoImage
                            src={windowWidth > 800 ? require("../../images/logo-header.webp") : require("../../images/logo-mobile-header.webp")}
                        />
                    </LogoWrapper>
                </Figure>
                <BasketWrapper to="/checkout">
                <BasketButton className="buttonClass">
                        <BasketIcon />
                        <CountWrapper>
                            <CountIcon>{basket.count}</CountIcon>
                        </CountWrapper>
                        <BasketName>BASKET</BasketName>
                        <BasketPrice>£{basket.totalPrice.toFixed(2) > 0 ? basket.totalPrice.toFixed(2): priceZero.toFixed(2)}</BasketPrice>
                </BasketButton>
                </BasketWrapper>
            </StyledHeader>

        </>
    )
}