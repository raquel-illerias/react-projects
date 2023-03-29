import React from 'react'
import { FavouritesStyled } from './favourites.style'


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

export default function Favourites() {

    return (
        <FavouritesStyled>
            <h2>{trend}Favourites</h2>
        </FavouritesStyled>
    )
}


