import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AmazonPage from '../../pageObjects/AmazonPage';

const amazonPage = new AmazonPage();

Given('que o usuário acessa o site da Amazon Brasil', () => {
    cy.visit('https://www.amazon.com.br');
});

When('ele digita {string} na barra de pesquisa', (produto) => {
    amazonPage.getSearchBox().type(produto);
});

Then('o autocomplete deve ser exibido', () => {
    amazonPage.getAutocompleteResults().should('be.visible');
});

When('ele busca pelo produto {string} e adiciona ao carrinho', (produto) => {
    amazonPage.getSearchBox().type(produto);
    amazonPage.getSearchButton().click();
    amazonPage.getFirstProduct().click();
    amazonPage.getAddToCartButton().click();
});

Then('o produto deve estar no carrinho', () => {
    amazonPage.getCartButton().click();
    amazonPage.getProceedToCheckoutButton().should('be.visible');
});

When('o usuário realiza login com {string} e {string}', (email, senha) => {
    amazonPage.getEmailInput().type(email);
    amazonPage.getContinueButton().click();
    amazonPage.getPasswordInput().type(senha);
    amazonPage.getSignInButton().click();
});

Then('ele deve conseguir finalizar a compra', () => {
    amazonPage.getPlaceOrderButton().click();
    amazonPage.getOrderConfirmation().should('be.visible');
});
