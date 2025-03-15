Feature: Fluxo de compra na Amazon

  Scenario: Buscar um produto e finalizar compra
    Given que o usuário acessa o site da Amazon Brasil
    When ele digita "laptop" na barra de pesquisa
    Then o autocomplete deve ser exibido

    When ele busca pelo produto "laptop" e adiciona ao carrinho
    Then o produto deve estar no carrinho

    When o usuário realiza login com "seu-email@exemplo.com" e "sua-senha"
    Then ele deve conseguir finalizar a compra
