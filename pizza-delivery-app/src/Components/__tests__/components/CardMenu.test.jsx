import CardMenu from "../../CardMenu";
import { render, screen } from "@testing-library/react";
import * as SelectSize from "../../SelectSize";
import '@testing-library/jest-dom';
import * as SelectAmount from "../../SelectAmount";
import userEvent from '@testing-library/user-event';


describe('Individual menu card', () => {
    const mockedImage = 'foo';
    const mockedMeal = {
        id: 4.4,
        name: "Gluten Free Vegi Supreme",
        kcal: [685],
        serves: "1-2",
        sizes: ["Small 9.5'' £18.99"],
        image: mockedImage,
        price: 1
    };
    const mockedCalorie = false;
    const mockedBasket = {
        count: 10,
        totalPrice: 0
    };
    const setBasket = jest.fn();
    const setSummaryCard = jest.fn();

    const renderCardMenu = () => {
        render(
            <CardMenu 
                meal={mockedMeal} 
                calorie={mockedCalorie} 
                setBasket={setBasket} 
                basket={mockedBasket } 
                setSummaryCard={setSummaryCard} />
        )
    }

    it('should render the Component', () => {
        renderCardMenu();

        expect(screen.getByTestId('component-container')).toBeInTheDocument();
    })
    it('should pass the image prop from the meal object to the src attribute', () => {
        renderCardMenu();

        expect(screen.getByTestId('image-component').getAttribute('src')).toBe(mockedImage);
    })
    it('should pass the name prop from the meal object to the alt attribute', () => {
        renderCardMenu();

        expect(screen.getByTestId('image-component').getAttribute('alt')).toBe(mockedMeal.name);
    })

    it('should display the name prop from the meal object as the title', () => {
        renderCardMenu();

        expect(screen.getByTestId('component-title')).toHaveTextContent(mockedMeal.name)
    })   

    it('should call the SelectSize component with the correct props when a size exists on the meal object', () => {

        const selectSizeComponent = jest.spyOn(SelectSize, 'default');

        renderCardMenu();

        expect(selectSizeComponent).toHaveBeenCalled();
        expect(selectSizeComponent.mock.calls[0][0]).toMatchObject({ 
            calorie: mockedCalorie,
            size: mockedMeal.sizes,
            handleSize: expect.any(Function), 
            itemOptions: expect.any(Array), 
            select: mockedMeal.sizes[0], 
            selectedKcal: mockedMeal.kcal[0]
        })       
    })    

    it('should call the SelectAmount component with the correct props when an amount exists on the meal object', () => {

        const selectAmountComponent = jest.spyOn(SelectAmount, 'default');

        renderCardMenu();

        expect(selectAmountComponent).toHaveBeenCalled();
        expect(selectAmountComponent.mock.calls[0][0]).toMatchObject({ 
            calorie: mockedCalorie,
            price: expect.any(Number),
            kcal: mockedMeal.kcal,
            selectAmount: expect.any(Number),
            handleAmountChange: expect.any(Function)
        })       
    })  
    
    it('should call the onAdd function when clicking the plus button', () => {
        renderCardMenu();
        
        const addButton = screen.getByTestId('component-addButton');
        userEvent.click(addButton);
        
        expect(setBasket).toHaveBeenCalled();
    })
})