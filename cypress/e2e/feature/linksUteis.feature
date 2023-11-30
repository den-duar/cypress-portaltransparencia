Feature: Acessar Links Uteis

Background:
    Given que eu acesse a pagina inicial do portal

    Scenario: Links Uteis
        When clicar no link desejado
        Then o usuário sera redirecionado para a pagina escolhida
