import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import AllergyInfo from "../../AllergyInfo";


describe('Allergy Info Accordion', () => {
    const renderAllergyInfo = () => {
        render(
            <AllergyInfo />
        )
    }
    it('Should display the title', () => {
        renderAllergyInfo();

        const title = screen.getByTestId('allergy-text');
        expect(title).toHaveTextContent(/have an allergy\?/i)
    });

    it('Should display the descriptive text', () => {
        renderAllergyInfo();
        
        const descriptiveText = screen.getByTestId('descriptive-text');
        expect(descriptiveText).toHaveTextContent(/our food is freshly prepared instore so we cannot guarantee that any product is free from allergens due to the risk of cross contamination\./i
        )
    })

});