class LoginPage {
    visitLoginPage() {
      cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");
    }
  
    loginWithValidCredentials() {
      cy.fixture("userData").then((userData) => {
        cy.get("#Email").clear().type(userData.validUser.email);
        cy.get("#Password").clear().type(userData.validUser.password);
        cy.get("button[type='submit']").click();
      });
      
    }
  
    loginWithInvalidCredentials() {
      cy.fixture("userData").then((userData) => {
        cy.get("#Email").clear().type(userData.invalidUser.email);
        cy.get("#Password").clear().type(userData.invalidUser.password);
        cy.get("button[type='submit']").click();
      });
    }
  }
  
  export default new LoginPage();
  