import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../page-objects/LoginPage';

Given('que o usuário acessa a página de login', () => {
    LoginPage.visit();
});

When('ele insere as credenciais corretas e envia o formulário', () => {
    LoginPage.fillCredentials('usuario_teste', 'senha123');
    LoginPage.submit();
});

Then('ele deve ser redirecionado para a página principal', () => {
    cy.url().should('include', '/home');
});