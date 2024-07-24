Feature: Validar dados do objeto json

  Scenario: Validar os dados do objeto json com id 6
    Given que acesse a plataforma
    When acessar o menu Guide e navegar até "/albums/1/photos"
    And capturo os dados exibidos e os salvo em um array JSON
    Then valida os dados do objeto com id "6"
