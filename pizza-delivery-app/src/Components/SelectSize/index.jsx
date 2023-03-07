import { FormControl, TextField, InputLabel, Typography } from "@mui/material";
import { KcalContainer } from "./selectSize.style";


export default function SelectSize({ calorie, itemOptions, handleSize, select, selectedKcal  }) {

    return (
        <>
 
            {calorie ? (
                <KcalContainer>
                    <Typography variant="subtitle2" component="h6">
                        {selectedKcal}kcal
                    </Typography>
                </KcalContainer>
            ) : null}
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="size__select-label"></InputLabel>
                <TextField
                    id="size__select"
                    select
                    InputLabelProps={{ shrink: true }}
                    value={select}
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleSize}
                >
                    {itemOptions}
                </TextField>
            </FormControl>
        </>
    )
}