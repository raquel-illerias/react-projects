//import styled components
import {AppStyled} from './App.style'
//import stores
import { useThemeStore } from "./stores/theme.store";
import { useCallStore } from './stores/call.store';
//import hooks
import {useEffect, useState} from 'react'
//import components
import Header from "./Components/Header";
import Search from './Components/Search';
import Trending from './Components/Trending';
import Footer from './Components/Footer';

export default function App() {

  //state
  const [rendered, setRendered] = useState('trending')

  const {theme} = useThemeStore((state) => state);
  const {setTrending} = useCallStore((state) => state);

  // set giphy api 
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.giphy.com/v1/gifs";

  //call api
  useEffect(() => {
   fetch(`${baseUrl}/trending?api_key=${apiKey}&limit=20`)
   .then(res=>res.json())
   .then(res=>setTrending(res.data))
}, [apiKey, setTrending])

// Switch content display
const content = () => {
  switch (rendered) {
    case 'trending':
      return <Trending />
    case 'search':
      return <Search />
    default:
      return <Trending />
  }
}
  return (
    <AppStyled theme={theme}>
    <Header setRendered={setRendered}/>
    <main>
      {content()}
    </main>
    <Footer />
  </AppStyled>
  );
}
