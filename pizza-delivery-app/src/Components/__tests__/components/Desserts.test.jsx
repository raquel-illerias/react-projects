import Desserts from "../../Desserts";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import * as TitleMenu from '../../TitleMenu';
import Menus from "../../../data";
import userEvent from '@testing-library/user-event';


describe('desserts menu page', () => {

    const basket = {
        count: 0,
        totalPrice: 0
    };

    const summaryCard = [];

    const setBasket = jest.fn();
    const setSummaryCard = jest.fn();

    const renderDesserts = () => {
        render(
            <Desserts
            setBasket={setBasket}
            basket={basket}
            summaryCard={summaryCard}
            setSummaryCard={setSummaryCard}
            />
        )
    };

    it('should render the Component', () => {
        renderDesserts();
        expect(screen.getByTestId('desserts-component-container')).toBeInTheDocument();
    })

    it('should display the title', () => {
        const titleMenuComponent = jest.spyOn(TitleMenu, 'default');
        renderDesserts();

        expect(titleMenuComponent).toHaveBeenCalled();
        expect(titleMenuComponent.mock.calls[0][0]).toMatchObject({title: Menus[3].name});
    })

    it('should toggle the calories', () => {
        renderDesserts();

        
        userEvent.click(screen.getByRole('checkbox', {
            name: /calorie information/i
        }))
        
        expect(screen.queryByTestId("kcal-info")).not.toBeInTheDocument();
    })

})