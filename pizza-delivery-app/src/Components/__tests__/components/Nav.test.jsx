import Nav from "../../Nav";
import * as Pizza from '../../Pizza';
import * as Sides from '../../Sides';
import * as Desserts from '../../Desserts';
import * as Drinks from '../../Drinks';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


describe('Header component', () => {

    jest.spyOn(Pizza, 'default').mockReturnValueOnce(<p>Pizza page</p>)
    jest.spyOn(Sides, 'default').mockReturnValueOnce(<p>Sides page</p>)
    jest.spyOn(Desserts, 'default').mockReturnValueOnce(<p>Desserts page</p>);
    jest.spyOn(Drinks, 'default').mockReturnValueOnce(<p>Drinks page</p>)


    const basket = {
        count: 0,
        totalPrice: 10
    };
    const mockedSetBasket = jest.fn();
    const mockedSetSummary = jest.fn();
    const summaryCard = [];

    const renderNav = () => {
        render(
                 <Nav
                    basket={basket}
                    setBasket={mockedSetBasket}
                    setSummary={mockedSetSummary}
                    summary={summaryCard}
                />
        )
    };

    it('should render the Component', () => {
        renderNav();
        expect(screen.getByTestId('nav-component')).toBeInTheDocument();
    })

    it('should select other tabs', () => {
        renderNav();
       
        expect(screen.getByTestId('pizza-tab').getAttribute('aria-selected')).toBe('true');
        userEvent.click(screen.getByTestId('sides-tab'));
        expect(screen.getByTestId('sides-tab').getAttribute('aria-selected')).toBe('true');
        expect(screen.getByTestId('pizza-tab').getAttribute('aria-selected')).toBe('false');
    })

})