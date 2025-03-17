Feature: Fluxo de compra no SauceDemo

Scenario: Adicionar produto ao carrinho
    Given que estou logado no SauceDemo
    When eu adiciono um produto ao carrinho
    Then o produto deve aparecer no carrinho

Scenario: Finalizar a compra com sucesso
    Given que eu tenho um produto no carrinho
    When eu vou para a pagina de checkout
    And eu preencho as informacoes de pagamento
    And eu confirmo a compra
    Then eu vejo a mensagem de sucesso da compra