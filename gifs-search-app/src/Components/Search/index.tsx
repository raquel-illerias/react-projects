//import styles
import { SearchStyled } from './search.style'
import Masonry from 'react-masonry-css';
//import stores
import { useCallStore } from '../../stores/call.store';
import { useThemeStore } from '../../stores/theme.store';
//import Components
import GiffItem from '../GiffItem';

export default function Search() {

const list = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path fill='#02a6fc' d="M149.825 776Q137 776 128.5 767.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 606 128.5 597.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 436 128.5 427.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290 776v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z"/></svg>;

const {search} = useCallStore((state) => state)
const theme = useThemeStore((state) => state.theme)

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

return (
        <SearchStyled theme={theme}>
            <h2>{list}Search Results</h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {
                    search.map((giff) => {
                        
                        return <GiffItem key={giff.id} url={giff.url} images={giff.images} title={giff.title} />
                    })
                }
            </Masonry>
         
        </SearchStyled>
    )
}


