import { ButtonStyled } from "./button.style";
import { useThemeStore } from "../../stores/theme.store";

export default function Button() {
    const theme = useThemeStore((state) => state.theme)

    return (
        <ButtonStyled theme={theme}>                  
        </ButtonStyled>
    )
}

