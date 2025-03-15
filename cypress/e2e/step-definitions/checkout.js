import CheckoutPage from '../../page-objects/CheckoutPage';

Given('que o usuário adiciona um produto ao carrinho', () => {
    CheckoutPage.visit();
    CheckoutPage.addProductToCart();
});

When('ele procede para o checkout', () => {
    CheckoutPage.proceedToCheckout();
});

Then('a compra deve ser finalizada com sucesso', () => {
    cy.get('.confirmation-message').should('contain', 'Pedido realizado com sucesso!');
});
