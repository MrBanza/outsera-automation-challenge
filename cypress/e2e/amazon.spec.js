describe('E2E Test - Amazon Auto Complete and Purchase Flow', () => {

    it('Deve validar o autocomplete na busca de produtos', () => {
        // Acessar o site da Amazon Brasil
        cy.visit('https://www.amazon.com.br');

        // Digitar no campo de busca e validar o autocomplete
        cy.get('#twotabsearchtextbox').type('laptop');
        cy.get('.s-suggestion').should('be.visible');
    });

    it('Deve buscar um produto e realizar o fluxo de compra', () => {
        // Acessar o site da Amazon Brasil
        cy.visit('https://www.amazon.com.br');

        // Buscar por um produto
        cy.get('#twotabsearchtextbox').type('laptop');
        cy.get('.nav-search-submit').click();

        // Selecionar o primeiro produto da lista de resultados
        cy.get('.s-result-list .s-result-item').first().click();

        // Adicionar o produto ao carrinho
        cy.get('#add-to-cart-button').click();

        // Ir para o carrinho de compras
        cy.get('#hlb-view-cart-announce').click();

        // Iniciar o checkout
        cy.get('.a-button-input').contains('Proceed to checkout').click();

        // Realizar login (caso não esteja logado)
        cy.get('#ap_email').type('seu-email@exemplo.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('sua-senha');
        cy.get('#signInSubmit').click();

        // Finalizar a compra (os dados de pagamento e endereço já devem estar salvos)
        cy.get('.place-your-order-button').click();

        // Validar que a compra foi finalizada
        cy.get('.order-confirmation').should('be.visible');
    });
});
