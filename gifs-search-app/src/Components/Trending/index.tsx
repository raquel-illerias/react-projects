//import Components
import GiffItem from "../GiffItem";
//import Styled Components
import { TrendingStyled } from "./trending.style";
//import stores
import { useCallStore } from '../../stores/call.store';
import { useThemeStore } from "../../stores/theme.store";
//import Masonry css
import Masonry from 'react-masonry-css';


export default function Trending() {

    const {trending} = useCallStore((state) => state)
    const {theme} = useThemeStore((state) => state)

    const trend = <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38" fill="#12af6f"><path d="m123 816-43-43 292-291 167 167 241-241H653v-60h227v227h-59V452L538 735 371 568 123 816Z" /></svg>

    const breakpointColumnsObj = {
        default: 4,
        1400: 3,
        977: 2,
        500: 1
    };
    
    return (
        <TrendingStyled theme={theme}>
            <h2>{trend}Trending</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                
                {
                   trending.map((giff) => {                       
                        return <GiffItem key={giff.id} url={giff.url} images={giff.images} title={giff.title}></GiffItem>
                    })
                }
            </Masonry>
        </TrendingStyled>
    )
}


