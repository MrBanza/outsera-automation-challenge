import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pageObjects/LoginPage";

Given("que estou na página de login", () => {
  LoginPage.visitLoginPage();
});

When("eu preencho o email e a senha do usuário invalido", () => {
  LoginPage.loginWithInvalidCredentials();
});

Then("eu logo na aplicação com sucesso", () => {
  cy.wait(2000);
  cy.get('.oxd-alert-content').should('be.visible');
});

