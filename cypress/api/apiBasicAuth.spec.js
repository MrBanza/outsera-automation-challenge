describe('Teste de API com Basic Auth no Cypress', () => {
  
  const apiUrl = 'https://httpbin.org/basic-auth/user/passwd';
  const username = 'user';
  const password = 'passwd';
  
  it('Deve autenticar com sucesso usando Basic Auth', () => {
    cy.request({
      method: 'GET',
      url: apiUrl,
      auth: {
        username: username,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.authenticated).to.be.true;
    });
  });
  
  it('Deve falhar na autenticação com credenciais inválidas', () => {
    cy.request({
      method: 'GET',
      url: apiUrl,
      auth: {
        username: 'invalid_user',
        password: 'wrong_passwd'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
  
  });
  