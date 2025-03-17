class CheckoutPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    login() {
        cy.fixture("userData").then((userData) => {
          cy.get('[data-test="username"]').clear().type(userData.productUser.username);
          cy.get('[data-test="password"]').clear().type(userData.productUser.password);
          cy.get('[data-test="login-button"]').click();
        });
        
      }

    addProductToCart() {
        cy.get('#add-to-cart-sauce-labs-backpack').first().click();
    }

    proceedToCheckout() {
        cy.get('#checkout-btn').click();
    }
}

export default new CheckoutPage();
