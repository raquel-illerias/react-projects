import Sides from "../../Sides";
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

    const renderSides = () => {
        render(
                 <Sides
                    basket={basket}
                    setBasket={mockedSetBasket}
                    setSummary={mockedSetSummary}
                    summary={summaryCard}
                />
        )
    };

    it('should render the Component', () => {
        renderSides();
        expect(screen.getByTestId('sides-component')).toBeInTheDocument();
    })

    it('should toggle the calories', () => {
        renderSides();

        
        userEvent.click(screen.getByRole('checkbox', {
            name: /calorie information/i
        }))
        
        expect(screen.queryByTestId("kcal-info")).not.toBeInTheDocument();
    })

})