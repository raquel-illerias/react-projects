import React from 'react';
import {AppStyled} from './App.style'
import { useThemeStore } from "./stores/theme.store";

import Button from "./Components/Button";
import Favourites from "./Components/Favourites";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Trending from "./Components/Trending";

export default function App() {

  const {theme} = useThemeStore((state) => state);

  return (
    <AppStyled theme={theme}>
    <Header />
    <main>
    
    </main>
  </AppStyled>
  );
}
