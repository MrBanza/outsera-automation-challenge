import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../pageObjects/LoginPage";

Given("que estou na página de login", () => {
  LoginPage.visitLoginPage();
});

When("eu preencho o email e a senha do usuário", () => {
  LoginPage.loginWithValidCredentials();
});

Then("eu logo na aplicação com sucesso", () => {
  cy.url().should("include", "/admin/");
});
