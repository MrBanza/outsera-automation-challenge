class AmazonPage {
    getSearchBox() {
        return cy.get('#twotabsearchtextbox');
    }

    getAutocompleteResults() {
        return cy.get('.s-suggestion');
    }

    getSearchButton() {
        return cy.get('.nav-search-submit');
    }

    getFirstProduct() {
        return cy.get('.s-result-list .s-result-item').first();
    }

    getAddToCartButton() {
        return cy.get('#add-to-cart-button');
    }

    getCartButton() {
        return cy.get('#hlb-view-cart-announce');
    }

    getProceedToCheckoutButton() {
        return cy.get('.a-button-input').contains('Proceed to checkout');
    }

    getEmailInput() {
        return cy.get('#ap_email');
    }

    getContinueButton() {
        return cy.get('#continue');
    }

    getPasswordInput() {
        return cy.get('#ap_password');
    }

    getSignInButton() {
        return cy.get('#signInSubmit');
    }

    getPlaceOrderButton() {
        return cy.get('.place-your-order-button');
    }

    getOrderConfirmation() {
        return cy.get('.order-confirmation');
    }
}

export default AmazonPage;
