import Drinks from "../../Drinks";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Menus from "../../../data";
import * as TitleMenu from '../../TitleMenu';
import userEvent from '@testing-library/user-event';


describe('drinks menu page', () => {

    const basket = {
        count: 0,
        totalPrice: 0
    };

    const summaryCard = [];

    const setBasket = jest.fn();
    const setSummaryCard = jest.fn();

    const renderDrinks = () => {
        render(
            <Drinks
            setBasket={setBasket}
            basket={basket}
            summaryCard={summaryCard}
            setSummaryCard={setSummaryCard}
            />
        )
    };

    it('should render the Component', () => {
        renderDrinks();
        expect(screen.getByTestId('drinks-component-container')).toBeInTheDocument();
    })

    it('should display the title', () => {
        const titleMenuComponent = jest.spyOn(TitleMenu, 'default');
        renderDrinks();

        expect(titleMenuComponent).toHaveBeenCalled();
        expect(titleMenuComponent.mock.calls[0][0]).toMatchObject({title: Menus[4].name});
    })

    it('should toggle the calories', () => {
        renderDrinks();

        
        userEvent.click(screen.getByRole('checkbox', {
            name: /calorie information/i
        }))
        
        expect(screen.queryByTestId("kcal-info")).not.toBeInTheDocument();
    })
})