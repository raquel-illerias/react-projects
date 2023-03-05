import * as React from 'react';
import { Box, Step, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { StepperStyled, BoxContainer, StepLabelStyled, FragmentContainer, ButtonContainer, ConfirmButton, BackButton } from './checkout.style';
import Summary from '../../Components/Summary';
import CheckoutForm from '../../Components/CheckoutForm';
import Confirmation from '../../Components/Confirmation';



export default function Checkout({ basket, summaryCard, setSummaryCard, setBasket }) {

    const steps = [
        {
            label: 'SUMMARY',
            content: <Summary basket={basket} setBasket={setBasket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></Summary>
        },
        {
            label: 'CHECKOUT',
            content: <CheckoutForm></CheckoutForm>
        },
        {
            label: 'CONFIRMATION',
            content: <Confirmation></Confirmation>
        }];

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
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

            {activeStep === steps.length ? (
                <React.Fragment>
                    <FragmentContainer>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Link to="/">
                                <Button>GO TO HOMEPAGE</Button>
                            </Link>
                        </Box>
                    </FragmentContainer>
                </React.Fragment>
            ) : (
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
                            {activeStep !== 0 && (
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
                            <ConfirmButton disabled={basket.count === 0} onClick={handleNext} className="confirmButton">
                                {activeStep === steps.length - 1 ? 'FINISH' : 'CONFIRM'}
                            </ConfirmButton>
                        </ButtonContainer>
                    </FragmentContainer>
                </React.Fragment>
            )}
        </BoxContainer>
    );
}