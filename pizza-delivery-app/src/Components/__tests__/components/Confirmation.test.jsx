import Confirmation from "../../Confirmation";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('order confirmation page', () => {

    const renderConfirmation = () => {
        render (
            <Confirmation />
        )
    }

    it('should render the Component', () => {
        renderConfirmation();
        expect(screen.getByTestId('component-container')).toBeInTheDocument();
    })

    it('should display the confirmation text', () => {
        renderConfirmation();

        const confirmationText = screen.getByTestId('confirmation-text');
        expect(confirmationText).toHaveTextContent(/your order is on the way!/gi);
    })
})