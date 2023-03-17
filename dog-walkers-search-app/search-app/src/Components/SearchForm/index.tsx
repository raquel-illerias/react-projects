import { ButtonSearch, CheckBoxContainer, CheckBoxWrapper, CheckBoxLabel, CheckBoxInput, InputContainer, DateWrapper, ArrowForward, ContainerStyled, HeaderContainer, HeaderOne, HeaderTwo, FormContainer, FormWrapper, TextFieldStyled, DatePickerContainer } from "./searchForm.style";
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

    return (
        <>
            <ContainerStyled>
                <HeaderContainer>
                    <HeaderOne>Loving Pet Care in London</HeaderOne>
                    <HeaderTwo>Book trusted dog walkers</HeaderTwo>
                </HeaderContainer>
                <FormContainer elevation={3}>
                    <FormWrapper>
                        {/* Location input */}
                        <InputContainer>
                            <p>Dog Walking near</p>
                            <TextFieldStyled
                                id="outlined-basic"
                                size="small"
                                variant="outlined"
                                InputLabelProps={{ shrink: true }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            />
                        </InputContainer>
                        {/* Date Pickers Range */}
                        <DatePickerContainer>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                {/* Start Date Picker */}
                                <InputContainer>
                                    <p>Start Date</p>
                                    <DateWrapper>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                format={'DD/MM/YYYY'}
                                                value={startValue}
                                                onChange={changeStartDate}
                                                disablePast
                                            />
                                        </DemoContainer>
                                        <ArrowForward></ArrowForward>
                                    </DateWrapper>
                                </InputContainer>
                                {/* End Date Picker */}
                                <InputContainer>
                                    <p>End Date</p>
                                    <DateWrapper>
                                        <DemoContainer components={['DatePicker']}>
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
                            <p>My Dog's Size</p>
                            <CheckBoxContainer>
                                <CheckBoxWrapper style={{ borderColor: smallChecked ? '#53c777' : '#f5f5f5', backgroundColor: smallChecked ? '#f3f3f3' : '#fff' }}>
                                    <CheckBoxLabel>
                                        <CheckBoxInput type="checkbox" value="1" checked={smallChecked} onChange={handleSmallChange} /><span>Small<br />0 - 7 kg</span>
                                    </CheckBoxLabel>
                                </CheckBoxWrapper>
                                <CheckBoxWrapper style={{ borderColor: mediumChecked ? '#53c777' : '#f5f5f5', backgroundColor: mediumChecked ? '#f3f3f3' : '#fff' }}>
                                    <CheckBoxLabel>
                                        <CheckBoxInput type="checkbox" value="1" checked={mediumChecked} onChange={handleMediumChange} /><span>Medium<br />7 - 18 kg</span>
                                    </CheckBoxLabel>
                                </CheckBoxWrapper>
                                <CheckBoxWrapper style={{ borderColor: bigChecked ? '#53c777' : '#f5f5f5', backgroundColor: bigChecked ? '#f3f3f3' : '#fff' }}>
                                    <CheckBoxLabel>
                                        <CheckBoxInput type="checkbox" value="1" checked={bigChecked} onChange={handleBigChange} /><span>Big<br />18+ kg</span>
                                    </CheckBoxLabel>
                                </CheckBoxWrapper>
                            </CheckBoxContainer>
                        </InputContainer>
                        <InputContainer>
                            <ButtonSearch variant="contained">Search</ButtonSearch>
                        </InputContainer>
                    </FormWrapper>
                </FormContainer>
            </ContainerStyled>
        </>
    )
}