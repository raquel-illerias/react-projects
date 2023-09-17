import Pizza from "../../Pizza";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe('Header component', () => {
    const basket = {
        count: 0,
        totalPrice: 10
    };
    const mockedSetBasket = jest.fn();
    const mockedSetSummary = jest.fn();
    const summaryCard = [];

    const renderPizza = () => {
        render(
                 <Pizza
                    basket={basket}
                    setBasket={mockedSetBasket}
                    setSummary={mockedSetSummary}
                    summary={summaryCard}
                />
        )
    };

    it('should render the Component', () => {
        renderPizza();
        expect(screen.getByTestId('pizza-component')).toBeInTheDocument();
    })

    it('should toggle the calories', () => {
        renderPizza();

        
        userEvent.click(screen.getByRole('checkbox', {
            name: /calorie information/i
        }))
        
        expect(screen.queryByTestId("kcal-info")).not.toBeInTheDocument();
    })

})