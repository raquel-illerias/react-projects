//import styled components
import { HeaderStyled } from "./header.style"
//import stores
import { useThemeStore } from "../../stores/theme.store";
import { useCallStore } from "../../stores/call.store";
//import hooks
import { useEffect, useState } from "react";
import { SetRendered } from "./interface";


export default function Header({setRendered}: SetRendered) {

    const [query, setQuery] = useState('')

    const {setSearch} = useCallStore((state) => state);
    const theme = useThemeStore((state) => state.theme)

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = "https://api.giphy.com/v1/gifs";   
 
    //api call: Search
    const searchGiffs = async (query: string) => {
        const response = await fetch(`${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=18`);
        const data = await response.json();
        setSearch(data.data);
      }
    
      useEffect(() => {
        searchGiffs('search');
      }, []);

    //Submit search
    const handleSubmit = (e: any) => {
        e.preventDefault()
        searchGiffs(query)
        setRendered('search')
        setQuery('')

        if(query === ''){
            setRendered('trending')
        }
    }

    const handleChange = (e:any) => {
        setQuery(e.target.value)
    }
    

    return (
        <HeaderStyled theme={theme}>
            <div className="logo">
                <span>Powered by</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 35" className="Svg-sc-jx1qpn cietHP"><g fillRule="evenodd" clipRule="evenodd"><path fill="#00ff99" d="M0 3h4v29H0z"></path><path fill="#9933ff" d="M24 11h4v21h-4z"></path><path fill="#00ccff" d="M0 31h28v4H0z"></path><path fill="#fff35c" d="M0 0h16v4H0z"></path><path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path><path fill="#121212" opacity="0.4" d="M24 16v-4h4M16 0v4h-4"></path></g><g fill="#ffffff"><path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z"></path></g></svg>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text"  value={query} onChange={handleChange} placeholder="Search GIFs" />
                    <button className="submit-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38"><path fill="white" d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" /></svg>
                    </button>
                </div>
            </form>
            <div className="fetch-btns">
                <button className="pick-option" onClick={() => {setRendered('trending')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 96 960 960" width="38" fill="#12af6f"><path d="m123 816-43-43 292-291 167 167 241-241H653v-60h227v227h-59V452L538 735 371 568 123 816Z" /></svg>
                    <span>Trending</span>
                </button>
            </div>
        </HeaderStyled>
    )
}