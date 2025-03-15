class CheckoutPage {
    visit() {
        cy.visit('/checkout');
    }

    addProductToCart() {
        cy.get('.add-to-cart-btn').first().click();
    }

    proceedToCheckout() {
        cy.get('#checkout-btn').click();
    }
}

export default new CheckoutPage();
