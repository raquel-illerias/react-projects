import { useThemeStore } from "../../stores/theme.store";
import { GiffStyled } from "./giffItem.style";
import { GiffItemProps } from "./interface";

export default function GiffItem({ title, images: {original: {url}}}: GiffItemProps) {

    const theme = useThemeStore((state) => state.theme);

    return (
        <GiffStyled theme={theme}>
            <div className="gif">
                <img src={url} alt={title} />
            </div>
            <br />
        </GiffStyled>
    )
}

