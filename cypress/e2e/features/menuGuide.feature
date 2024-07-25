Feature: Validar dados do objeto json

  Scenario: Validar os dados do objeto json com id 6
    Given que acesse a plataforma
    When clicar no menu Guide
    And acessar "/albums/1/photos" e capturar os dados exibidos e salvar em um array JSON
    Then valida os dados do objeto com id 6
