import CheckoutForm from "../../CheckoutForm";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('checkout form to be filled in with personal details', () => {

    const mockedBasket = { 
        count: 1, 
        totalPrice: 8.99 
    };

    const renderCheckoutForm = () => {
        render(
            <CheckoutForm
                basket = {mockedBasket} 
            />
        )
    }

    it('should render the Component', () => {
        renderCheckoutForm();
        expect(screen.getByTestId('component-container')).toBeInTheDocument();
    })

    it('should display the title text', () => {
        renderCheckoutForm();

        const titleText = screen.getByTestId('title-text');
        expect(titleText).toHaveTextContent(/my details/gi);
    })

    it('should display the totalPrice prop from the basket object', () => {
        renderCheckoutForm();

        expect(screen.getByTestId('component-total-price')).toHaveTextContent(mockedBasket.totalPrice);
    })
}) 