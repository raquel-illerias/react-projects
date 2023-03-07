import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionContainer, InfoIconStyled } from "./allergyInfo.style.js";

export default function AllergyInfo() {
    return (
        <AccordionContainer>
                <Accordion sx={{width: "80%"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <InfoIconStyled></InfoIconStyled>
                        <Typography>Have an allergy?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Our food is freshly prepared instore so we cannot guarantee that any product is free from allergens due to the risk of cross contamination.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </AccordionContainer>
    );
}