import * as React from 'react';
import { Box, Step } from '@mui/material';
import { StepperStyled, BoxContainer, StepLabelStyled, FragmentContainer, ButtonContainer, ConfirmButton, BackButton } from './checkout.style';
import Summary from '../../Components/Summary';
import CheckoutForm from '../../Components/CheckoutForm';
import Confirmation from '../../Components/Confirmation';
import { Link } from 'react-router-dom';



export default function Checkout({ basket, summaryCard, setSummaryCard, setBasket }) {

    const steps = [
        {
            label: 'SUMMARY',
            content: <Summary basket={basket} setBasket={setBasket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></Summary>
        },
        {
            label: 'CHECKOUT',
            content: <CheckoutForm basket={basket}></CheckoutForm>
        },
        {
            label: 'CONFIRMATION',
            content: <Confirmation></Confirmation>
        }];

    const [activeStep, setActiveStep] = React.useState(0);

    function handleNext()  {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 1) {
            setBasket({ count: 0, totalPrice: 0.00 });
            setSummaryCard([]);
        }
    };

    function handleBack() {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
 
    return (
        <BoxContainer>
            <StepperStyled activeStep={activeStep}>
                {steps.map((step, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={step.label} {...stepProps}>
                            <StepLabelStyled {...labelProps} >{step.label}</StepLabelStyled>
                        </Step>
                    );
                })}
            </StepperStyled>
                <React.Fragment>
                    <FragmentContainer activestep={activeStep}>
                        {steps.map((step, index) => {
                            return (
                                activeStep === index && (
                                    <Box key={step.content}>
                                        {step.content}
                                    </Box>
                                )
                            );
                        })}
                        <ButtonContainer>
                            {activeStep === 1 && (
                                <BackButton
                                    className='backButton'
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    BACK
                                </BackButton>
                            )}
                            {activeStep !== steps.length - 1 && <ConfirmButton disabled={basket.count === 0} onClick={handleNext} className="confirmButton">
                                CONFIRM
                            </ConfirmButton>}
                            {activeStep === steps.length - 1 && 
                            <Link to="/">
                            <ConfirmButton to="/" className="confirmButton">
                                HOMEPAGE
                            </ConfirmButton>
                            </Link>
                            }
                        </ButtonContainer>
                    </FragmentContainer>
                </React.Fragment>
            
        </BoxContainer>
    );
}