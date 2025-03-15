class LoginPage {
    visit() {
        cy.visit('/login');
    }

    fillCredentials(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }
}

export default new LoginPage();