import CardMenu from "../../Components/CardMenu";
import TitleMenu from "../../Components/TitleMenu";
import Menus from "../../data"
import { ContainerStyled, ToggleContainer } from "./pizza.style";
import { FormControlLabel, Switch } from "@mui/material"
import { useState } from "react";

export default function Pizza({basket, setBasket, summaryCard, setSummaryCard}) {

    //Toggling calorie display
    const [calorie, setCalorie] = useState(true)

    function toggleCalorie() {
        setCalorie(prevState => !prevState)
    }
   
    //Menu titles data fetch
    const menuTitle = Menus[0].name
    const menuFirstSpeciality = Menus[0].subtitle
    const menuGlutenFree = Menus[1].subtitle

    //Mapping over meals data
    const specialityMeals = Menus[0].meals.map(meal => {
        return (
            <CardMenu key={meal.id} meal={meal} calorie={calorie} setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></CardMenu>
        )
    })

    const glutenFreeMeals = Menus[1].meals.map(meal => {
        return (
            <CardMenu key={meal.id} meal={meal} calorie={calorie} setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></CardMenu>
        )
    })

    return (
        <div>
            <TitleMenu title={menuTitle} speciality={menuFirstSpeciality}></TitleMenu>
            <ToggleContainer>
                <FormControlLabel control={<Switch defaultChecked onChange={toggleCalorie} />} label="Calorie Information" />
            </ToggleContainer>
            <ContainerStyled>{specialityMeals}</ContainerStyled>

            <TitleMenu speciality={menuGlutenFree}></TitleMenu>
            <ContainerStyled>  {glutenFreeMeals}</ContainerStyled>
        </div>
    )
}

