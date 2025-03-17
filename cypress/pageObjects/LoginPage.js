class LoginPage {
    visitLoginPage() {
      cy.visit("https://opensource-demo.orangehrmlive.com");
    }
  
    loginWithValidCredentials() {
      cy.fixture("userData").then((userData) => {
        cy.get('[name="username"]').clear().type(userData.validUser.user);
        cy.get('[name="password"]').clear().type(userData.validUser.password);
        cy.get("button[type='submit']").click();
      });
      
    }
  
    loginWithInvalidCredentials() {
      cy.fixture("userData").then((userData) => {
        cy.get('[name="username"]').clear().type(userData.invalidUser.user);
        cy.get('[name="password"]').clear().type(userData.invalidUser.password);
        cy.get("button[type='submit']").click();
      });
    }
  }
  
  export default new LoginPage();
  