Feature: Login
  Scenario: Login bem-sucedido
    Given que o usuário acessa a página de login
    When ele insere as credenciais corretas e envia o formulário
    Then ele deve ser redirecionado para a página principal
