// steps.js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on the login page', () => {
  cy.visit('/login')
})

When('I enter my credentials', (dataTable) => {
  const username = dataTable.hashes()[0].username
  const password = dataTable.hashes()[0].password
  cy.get('#username').type(username)
  cy.get('#password').type(password)
})

Then('I should be logged in', () => {
  cy.get('.logged-in-message').should('contain', 'Welcome!')
})