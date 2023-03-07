import CardMenu from "../../Components/CardMenu";
import TitleMenu from "../../Components/TitleMenu";
import Menus from "../../data"
import { ContainerStyled, ToggleContainer } from "./sides.style";
import { FormControlLabel, Switch } from "@mui/material"
import { useState } from "react";

export default function Sides({ setBasket, basket, summaryCard, setSummaryCard }) {
    //Toggling calorie display
    const [calorie, setCalorie] = useState(true)

    function toggleCalorie() {
        setCalorie(prevState => !prevState)
    }

    const menuTitle = Menus[2].name

    const specialityMeals = Menus[2].meals.map(meal => {
        return (
            <CardMenu key={meal.id} meal={meal} calorie={calorie} setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></CardMenu>
        )
    })

    return (
        <div>
            <TitleMenu title={menuTitle}></TitleMenu>
            <ToggleContainer>
                <FormControlLabel control={<Switch defaultChecked onChange={toggleCalorie} />} label="Calorie Information" />
            </ToggleContainer>
            <ContainerStyled>{specialityMeals}</ContainerStyled>
        </div>
    )
}

