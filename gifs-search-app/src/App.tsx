import React from 'react';
import {AppStyled} from './App.style'

import Button from "./Components/Button";
import Favourites from "./Components/Favourites";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Trending from "./Components/Trending";

export default function App() {
  return (
    <AppStyled >
    <Header  />
    <div className="fetch-btns">
      <Button 
        
      />
      <Button 
      />
      <Button 
      />
    </div>
    <main>
    </main>
  </AppStyled>
  );
}
