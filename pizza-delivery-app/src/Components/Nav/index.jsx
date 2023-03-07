import { Box, Tabs } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";
import AllergyInfo from "../AllergyInfo";
import Desserts from "../Desserts";
import Drinks from "../Drinks";
import Pizza from "../Pizza";
import Sides from "../Sides";
import { BoxContainer, TabStyled } from "./nav.style";


function TabPanel(props) {

    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Component

export default function Nav({setBasket, basket, summaryCard, setSummaryCard}) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };   

    return (
        <Box sx={{ width: '100%' }}>
            <BoxContainer sx={{ backgroundColor: '#e0eaef' }}>
                <Tabs TabIndicatorProps={{ sx: { backgroundColor: "#e91c37", height: 5 } }} 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="basic tabs example" 
                    centered>
                        <TabStyled label="PIZZA" {...a11yProps(0)} />
                        <TabStyled label="SIDES" {...a11yProps(1)} />
                        <TabStyled label="DESSERTS" {...a11yProps(2)} />
                        <TabStyled label="DRINKS" {...a11yProps(3)} />
                </Tabs>
            </BoxContainer>
            <AllergyInfo />
            <TabPanel value={value} index={0}>
                <Pizza setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Sides setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Desserts setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Drinks setBasket={setBasket} basket={basket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}/>
            </TabPanel>
        </Box>
    );
}