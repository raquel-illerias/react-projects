import Header from "../../Header";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Header component', () => {

    const basket = {
        count: 0,
        totalPrice: 10
    };

    const renderHeader = () => {
        render(
            <Router>
                 <Header
                    basket={basket}
                />
            </Router>
        )
    };

    it('should render the Component', () => {
        renderHeader();
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    })

    it('should display the logo', () => {
        renderHeader();

        expect(screen.getByTestId('logo-component').getAttribute('src')).toBe("logo-header.webp");
    })
    it('should display the mobile logo', () => {
        Object.defineProperty(window, 'innerWidth', {
            value: 799,
        });

        renderHeader();

        expect(screen.getByTestId('logo-component').getAttribute('src')).toBe("logo-mobile-header.webp");
    })

    it('should display different logos with different screen widths', () => {
        
        const simulateWindowResize = (width) => {
            window.innerWidth = width;
            window.dispatchEvent(new Event('resize'));
        }

        renderHeader();

        expect(screen.getByTestId('logo-component').getAttribute('src')).toBe("logo-mobile-header.webp");

        act(() => {simulateWindowResize(1080);})

        expect(screen.getByTestId('logo-component').getAttribute('src')).toBe("logo-header.webp");
    })
    

    it('should give the basket price received via props', () => {
        renderHeader();

        
        expect(screen.queryByTestId('basket-price')).toHaveTextContent(`${basket.totalPrice.toFixed(2)}`);
    })

    it('should not give the basket price received via props when it is zero', () => {
        const basket = {
            count: 0,
            totalPrice: -1
        };
    
            render(
                <Router>
                     <Header
                        basket={basket}
                    />
                </Router>
            )

        
        expect(screen.queryByTestId('basket-price')).toHaveTextContent('0.00');
    })

})