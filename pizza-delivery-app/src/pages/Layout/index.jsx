//import routes
import { Routes,Route } from "react-router-dom";
//import pages
import Homepage from "../Homepage";
import Checkout from "../Checkout"
//import Components
import Footer from "../../Components/Footer"
import Header from "../../Components/Header";
import { useState } from "react";

export default function Layout() {

    const [basket, setBasket] = useState({ count: 0, totalPrice: 0.00 });

    const [summaryCard, setSummaryCard] = useState([]);


    return( 
        <div>
            <Header basket={basket}></Header>
            {<Routes>
                <Route path="/" element={<Homepage summaryCard={summaryCard} setSummaryCard={setSummaryCard} setBasket={setBasket} basket={basket}/>} />
                <Route path="/checkout" element={<Checkout basket={basket} setBasket={setBasket} summaryCard={summaryCard} setSummaryCard={setSummaryCard}/>} />
            </Routes>}
            <Footer></Footer>
        </div>
    )
}