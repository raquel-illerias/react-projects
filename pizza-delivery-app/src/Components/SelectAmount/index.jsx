import { Box, Typography, InputLabel, MenuItem, TextField } from "@mui/material";
import { FormStyled, PaperStyled, KcalContainer } from "./selectAmount.style";

export default function SelectAmount({ price, kcal, selectAmount, handleAmountChange, calorie }) {

     //display amount of items to select
     const amountArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

     const amountOptions = amountArr.map((amount, index) => {
         return (
             <MenuItem value={amount} key={index}>{amount}</MenuItem>        
         )
     })

    //display kcal
    const kcals = kcal.map(unit => {
        return (
            calorie? (<KcalContainer key={unit}>
                <Typography variant="subtitle2"
                    component="h6">
                    {unit}kcal
                </Typography>
            </KcalContainer>) : null
        )
    })

    return (
        <>
            {kcals}
            <PaperStyled elevation={0}>
                <Box marginRight={"2rem"}>
                    <Typography>{price}</Typography>
                </Box>
                <FormStyled fullWidth>
                    <InputLabel id="amount-label"></InputLabel>
                    <TextField
                        labelid="amount-label"
                        id="amount"
                        select
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ 'aria-label': 'Without label' }}
                        value={selectAmount}
                        onChange={handleAmountChange}
                    >
                        {amountOptions}
                    </TextField>
                </FormStyled>
            </PaperStyled>
        </>
    )
}