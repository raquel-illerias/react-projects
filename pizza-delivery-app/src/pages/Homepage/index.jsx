import Nav from "../../Components/Nav";


export default function Homepage({setBasket, basket, setSummary, summaryCard, setSummaryCard}) {

    return (
        <>    
                <Nav setBasket={setBasket} basket={basket} setSummary={setSummary} summaryCard={summaryCard} setSummaryCard={setSummaryCard}></Nav>
        </>
    )
}