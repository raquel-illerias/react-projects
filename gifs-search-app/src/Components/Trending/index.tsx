import { TrendingStyled } from "./trending.style"


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

export default function Trending() {

    return (
        <TrendingStyled>
            <h2>{trend}Trending</h2>
        </TrendingStyled>
    )
}


