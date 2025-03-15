Feature: Fluxo de Checkout
  Scenario: Finalização de compra
    Given que o usuário adiciona um produto ao carrinho
    When ele procede para o checkout
    Then a compra deve ser finalizada com sucesso
