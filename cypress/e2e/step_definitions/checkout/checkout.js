import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CheckoutPage from "../../../pageObjects/CheckoutPage";

Given("que estou logado no SauceDemo", () => {
  CheckoutPage.visit();
  CheckoutPage.login();
});

When("eu adiciono um produto ao carrinho", () => {
  CheckoutPage.addProductToCart();
});

Then("o produto deve aparecer no carrinho", () => {
  cy.click(".shopping_cart_link");
  cy.get(".inventory_item_name").should("be.visible");
});

Given("que tenho um produto no carrinho", () => {
  cy.get(".inventory_item_name").should("be.visible");
});

When("eu vou para a página de checkout", () => {
  cy.get(".shopping_cart_link").click();
  cy.get("#checkout").click();
});

When("eu preencho as informações de pagamento", () => {
  cy.get("#first-name").type("John");
  cy.get("#last-name").type("Doe");
  cy.get("#postal-code").type("12345");
  cy.get("#continue").click();
});

When("eu confirmo a compra", () => {
  cy.get("#finish").click();
});

Then("eu vejo a mensagem de sucesso da compra", () => {
  cy.get(".complete-header").should("contain", "Thank you for your order!");
});

