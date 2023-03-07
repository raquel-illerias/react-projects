import { Typography } from "@mui/material";
import { EmptyCart, SummaryContainer, TitleBox, Ornament, Title, CountContainer, ItemsContainer, TotalPriceContainer, RemoveButton, ContainerLeft, ContainerRight, FullCart } from "./summary.style"

export default function Summary( {basket, summaryCard, setSummaryCard, setBasket } ) {

  function handleRemoveItem(itemKey, itemPrice) {
    const updatedCartItems = summaryCard.filter(item => item.key !== itemKey);
    setSummaryCard(updatedCartItems);
    setBasket(prevState=>{
      return(
        { count: prevState.count - 1,
         totalPrice: prevState.totalPrice - itemPrice }
      )
    })
  }

  const priceZero = 0.00;

    return (
        <>
            <SummaryContainer>
                <TitleBox>
                    <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                    <Title variant="h3" component={"h2"}>
                        BASKET SUMMARY
                    </Title>
                    <Ornament src={require("../../images/ornament-pizza-2.webp")} alt="" />
                </TitleBox>
                <CountContainer >
                    <Typography variant="body2" component={"p"}>You have <b>{basket.count} {basket.count === 1? "item": "items"}</b> on a delivery order</Typography>
                </CountContainer>
                <ItemsContainer>
                    {basket.count === 0? (<EmptyCart>
                        <Typography>Nothing in your basket...yet!</Typography>
                    </EmptyCart>):
                      summaryCard.map((item) => (
                        <FullCart key={item.key}>
                        <ContainerLeft>
                          <img src={item.image} alt="item" />
                          <Typography variant="h6" component={"h6"} sx={{ margin: 2 }}>
                            {item.name}
                          </Typography>
                        </ContainerLeft>
                        <ContainerRight>
                          <Typography
                            variant="h6"
                            component={"h6"}
                            sx={{
                              width: "100px",
                              textAlign: "center",
                              fontFamily: "Roboto Condensed, sans-serif",
                            }}
                          >
                            £{item.price}
                          </Typography>
                          <RemoveButton onClick={()=>handleRemoveItem(item.key, item.price)}>REMOVE</RemoveButton>
                        </ContainerRight>
                      </FullCart>
                       ))
                    }
                </ItemsContainer>
                <TotalPriceContainer>
                    <Typography variant="body2" component={"h2"}><b>Total (Including VAT):</b> <br />Including delivery fee</Typography>
                    <Typography variant="h4" component={"h2"} sx={{fontFamily: 'Roboto Condensed, sans-serif'}}><b>£{basket.totalPrice.toFixed(2) > 0 ? basket.totalPrice.toFixed(2): priceZero.toFixed(2)}</b></Typography>
                </TotalPriceContainer>
            </SummaryContainer>
        </>
    )
}