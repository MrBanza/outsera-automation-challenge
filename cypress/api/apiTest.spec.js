describe('Teste de API com Cypress', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  it('GET - Buscar lista de posts', () => {
      cy.wrap(null).then(() => {
          return cy.request('GET', baseUrl);
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.an('array');
      });
  });

  it('POST - Criar um novo post', () => {
      cy.wrap(null).then(() => {
          return cy.request({
              method: 'POST',
              url: baseUrl,
              body: {
                  title: 'Novo Post',
                  body: 'Conteúdo do post',
                  userId: 1
              }
          });
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('id');
      });
  });

  it('POST - Deve falhar ao criar um post sem título', () => {
    cy.request({
        method: 'POST',
        url: baseUrl,
        failOnStatusCode: false, // Permite capturar erro HTTP
        body: {
            body: 'Post sem título',
            userId: 1
        }
    }).then((response) => {
        expect(response.status).to.eq(201); // JSONPlaceholder sempre retorna 201
        expect(response.body).to.have.property('id'); // O post é criado mesmo sem título
        cy.log('⚠️ A API não valida os dados e cria o post mesmo sem título.');
    });
});

  it('DELETE - Deletar um post', () => {
      cy.wrap(null).then(() => {
          return cy.request({
              method: 'DELETE',
              url: `${baseUrl}/1`
          });
      }).then((response) => {
          expect(response.status).to.eq(200);
      });
  });

  it('DELETE - Deve falhar ao deletar um post inexistente', () => {
    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/9999`, // ID inexistente
        failOnStatusCode: false // Permite capturar erro HTTP
    }).then((response) => {
        expect(response.status).to.eq(200); // A API retorna 200 mesmo se o post não existir
        expect(response.body).to.be.empty; // O corpo da resposta deve estar vazio
        cy.log('⚠️ A API sempre retorna 200 ao deletar, mesmo que o post não exista.');
    });
});
});
