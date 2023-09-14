//import MUI Components
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
//import Styled Components
import { DateStartContainer, CheckboxWrapper, ButtonSearch, InputContainer, DateWrapper, ArrowForward, FormContainer, FormWrapper, TextFieldStyled, DatePickerContainer } from "./searchForm.style";
// import hooks
import { useState } from "react";

export default function SearchForm() {

    const [startValue, setStartValue] = useState<Dayjs | null>(dayjs(Date.now()));
    const [endValue, setEndValue] = useState<Dayjs | null>(dayjs(Date.now()));

    function changeStartDate(newValue: any) {
        setStartValue(() => {
            return (
                newValue)
        })
        if (endValue != null && newValue > endValue) {
            return setEndValue(newValue)
        }
    }

    function changeEndDate(newValue: any) {
        setEndValue(() => {
            return (
                newValue)
        })
    }

    const minDate: Dayjs | null = startValue

    //HANDLE CHECKBOX CHANGES

    const [smallChecked, setSmallChecked] = useState(false);
    const [mediumChecked, setMediumChecked] = useState(false);
    const [bigChecked, setBigChecked] = useState(false);

    const handleSmallChange = () => {
        setSmallChecked(!smallChecked);
    };

    const handleMediumChange = () => {
        setMediumChecked(!mediumChecked);
    };

    const handleBigChange = () => {
        setBigChecked(!bigChecked);
    };

    //HANDLE SEARCH BUTTON

    function handleSearch() {
        if((smallChecked && mediumChecked && bigChecked) === false) {
            return console.log("something needs to be checked")
        }
    }

    return (
        <>
            <FormContainer elevation={3}>
                <FormWrapper>
                    <h3 className="header__three">Find the Perfect Match</h3>
                    {/* Location input */}
                    <InputContainer>
                        <p className="input__label">What's your address?</p>
                        <TextFieldStyled
                            id="outlined-basic"
                            size="small"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ 'aria-label': 'Without label' }}
                            placeholder="Postcode or address"
                        />
                    </InputContainer>
                    {/* Date Pickers Range */}
                    <DatePickerContainer>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* Start Date Picker */}
                            <DateStartContainer>
                                <p className="input__label">Which dates do you need?</p>
                                <DateWrapper>
                                    <DemoContainer sx={{ width: '90%' }} components={['DatePicker']}>
                                        <DatePicker
                                            format={'DD/MM/YYYY'}
                                            value={startValue}
                                            onChange={changeStartDate}
                                            disablePast
                                        />
                                    </DemoContainer>
                                    <ArrowForward></ArrowForward>
                                </DateWrapper>
                            </DateStartContainer>
                            {/* End Date Picker */}
                            <InputContainer>
                                <p className="input__label end">""</p>
                                <DateWrapper>
                                    <DemoContainer sx={{ width: '90%' }} components={['DatePicker']}>
                                        <DatePicker
                                            format={'DD/MM/YYYY'}
                                            value={endValue}
                                            onChange={changeEndDate}
                                            disablePast
                                            minDate={minDate}
                                        />
                                    </DemoContainer>
                                </DateWrapper>
                            </InputContainer>
                        </LocalizationProvider>
                    </DatePickerContainer>
                    {/* Dog Size Checkbox */}
                    <InputContainer>
                        <p className="input__label">What size are your dogs?</p>
                        <CheckboxWrapper>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Small (0 - 7 kg)" onChange={handleSmallChange} />
                                <FormControlLabel control={<Checkbox />} label="Medium (7 - 18 kg)" onChange={handleMediumChange} />
                                <FormControlLabel control={<Checkbox />} label="Big (18+ kg)" onChange={handleBigChange} />
                            </FormGroup>
                        </CheckboxWrapper>
                    </InputContainer>
                    <InputContainer>
                        <ButtonSearch href="/profileResults" variant="contained" onClick={handleSearch}>Search</ButtonSearch>
                    </InputContainer>
                </FormWrapper>
            </FormContainer>
        </>
    )
}