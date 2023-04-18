//import styled components
import {AppStyled} from './App.style'
//import stores
import { useThemeStore } from "./stores/theme.store";
//import hooks
import {useEffect} from 'react'
//import components
import Header from "./Components/Header";

export default function App() {

  const {theme} = useThemeStore((state) => state);

  // set giphy api 
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = "https://api.giphy.com/v1/gifs";

  //call api
  useEffect(() => {
   fetch(`${baseUrl}/trending?api_key=${apiKey}&limit=30`)
   .then(res=>res.json())
   .then(res=>console.log(res))
}, [])


  return (
    <AppStyled theme={theme}>
    <Header />
    <main>
    
    </main>
  </AppStyled>
  );
}
