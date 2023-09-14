import CardMenu from "../../CardMenu";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';


describe('Individual menu card with meal, name, kcal, price and select box', () => {
    const mockedMeal = {
        id: 4.4,
        name: "Gluten Free Vegi Supreme",
        kcal: [685],
        serves: "1-2",
        sizes: ["Small 9.5'' £18.99"],
        image: "/static/media/gf-vegi.e6f6811e3774b9c57d7b.webp"
    };
    const calorie = false;
    const setBasket = jest.fn(); // Mock function for setBasket
    const basket = []; // Initial value for basket
    const setSummaryCard = jest.fn(); // Mock function for setSummaryCard
    const renderCardMenu = () => {
        render(
            <CardMenu meal={mockedMeal} calorie={calorie} setBasket={setBasket} basket={basket} setSummaryCard={setSummaryCard} />
        )
    }

    it('should render the Component', () => {
        renderCardMenu();
        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug();
    })
})