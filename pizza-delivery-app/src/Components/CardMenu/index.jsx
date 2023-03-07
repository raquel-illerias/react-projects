import { Typography, Fab, MenuItem } from "@mui/material";
import { BoxInfo, BoxStyled, MealImage, PaperStyled, IconAdd} from "./cardMenu.style";
import SelectSize from "../SelectSize";
import SelectAmount from "../SelectAmount";
import { useState } from "react";


export default function CardMenu({ meal, calorie, setBasket, basket, summaryCard, setSummaryCard }) {

   //HANDLING SELECT INPUT FOR PIZZA
   //handle changes in select input 
   const size = meal.sizes ?? false;
   const kcal = meal.kcal
   const [select, setSelect] = useState(size[size.length - 1]);
   const [selectedKcal, setSelectedKcal] = useState(kcal[kcal.length - 1]);

   const handleSize = (event) => {
      const selectedIndex = size.indexOf(event.target.value);
      setSelect(event.target.value);
      setSelectedKcal(kcal[selectedIndex]);
   };

   //map over size to render it in select input
   const itemOptions = meal.sizes?.map((option) => {
      return (
         <MenuItem value={option} key={option}>{option}</MenuItem>
      )
   });

   //split the string at the '£' and convert into a number
   const priceStr = select?.split('£')[1];
   const priceNum = parseFloat(priceStr);

   //HANDLING SELECT INPUT FOR SIDES, DESSERTS & DRINKS
   //handle changes on select input
   const [selectAmount, setSelectAmount] = useState(1)

   function handleAmountChange(event) {
      setSelectAmount(event.target.value);
   }

   //HANDLING BASKET
   const newCount = basket.count + selectAmount;
   const newAmountPrice = basket.totalPrice + meal.price * selectAmount;
   const newSizePrice = basket.totalPrice + priceNum;

   //add items into basket button and summary component
   function onAdd() {
      setBasket({ count: newCount, totalPrice: newAmountPrice || newSizePrice });

      const timestamp = Date.now(); 
      for (let i = 0; i < selectAmount; i++) {
      const newItem = {
         id: `${meal.id}-${timestamp} ${i}`,
         name: meal.name,
         image: meal.image,
         price: meal.price || priceNum
      }
      
      setSummaryCard(prev => [...prev, { ...newItem, key: newItem.id }]);
   }
   }


   return (
      <>
         <PaperStyled elevation={1} key={meal.id} square>
            <MealImage src={meal.image} alt={meal.name} className="meal__image" />
            <BoxInfo>
               <Typography variant="h5" component="h2" gutterBottom>
                  {meal.name}
               </Typography>
            </BoxInfo>
            {meal.sizes ? <SelectSize calorie={calorie} size={meal.sizes} handleSize={handleSize} itemOptions={itemOptions} select={select} selectedKcal={selectedKcal} /> : null}
            {meal.price ? <SelectAmount calorie={calorie} price={meal.price} kcal={meal.kcal} selectAmount={selectAmount} handleAmountChange={handleAmountChange} /> : null}
            <BoxStyled>
               <Fab color="primary" aria-label="add" onClick={(onAdd)}>
                  <IconAdd />
               </Fab>
            </BoxStyled>
         </PaperStyled>
      </>
   )
}