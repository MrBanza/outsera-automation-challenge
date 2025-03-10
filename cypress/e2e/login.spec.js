describe('E2E Test - Login na Amazon', () => {

    it('Deve realizar login na Amazon', () => {
        // Acessar a página de login da Amazon
        cy.visit('https://www.amazon.com.br/ap/signin');

        // Inserir o e-mail e clicar em continuar
        cy.get('#ap_email').type('seu-email@exemplo.com');
        cy.get('#continue').click();

        // Inserir a senha e clicar em entrar
        cy.get('#ap_password').type('sua-senha');
        cy.get('#signInSubmit').click();

        // Validar que o login foi bem-sucedido
        cy.url().should('include', '/your-account');
        cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Sua Conta');
    });

});
