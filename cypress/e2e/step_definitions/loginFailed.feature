Feature: Validar Falha de dados invalidos

Scenario: Login falho
    Given que estou na página de login
    When eu preencho o email e a senha do usuário invalido
    Then eu não logo na aplicação