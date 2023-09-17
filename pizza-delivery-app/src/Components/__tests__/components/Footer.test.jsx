import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "../../Footer";

describe('footer section', () => {

    const renderFooter = () => {
        render(
            <Footer />
        )
    }

    it('should render the Component', () => {
        renderFooter();
        expect(screen.getByTestId('footer-component-container')).toBeInTheDocument();
    });

    it('should display the Copyright text', () => {
        renderFooter();

        expect(screen.getByTestId('copyright-text')).toHaveTextContent(/© 2023 Raquel Illerias | All Rights Reserved\?/i)
    }) 

    it('should have the correct href', () => {
        renderFooter();

        expect(screen.getByTestId('link-to-github').getAttribute('href')).toBe('https://github.com/raquel-illerias/react-projects/tree/main/pizza-delivery-app');
    }) 
})