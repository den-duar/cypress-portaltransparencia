Feature: Acessar pagina de despesas

Background:
    Given que eu acesse a pagina inicial do portal

    Scenario: Despesas quadro geral
        When acessar a pagina de despesas do portal
        And eu selecionar as opções dos filtros e eu clicar no botao pesquisar
        Then deve ser exibida a pagina com informacoes das despesas
        