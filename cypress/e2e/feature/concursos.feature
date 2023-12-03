Feature: Acessar Concursos

Background:
    Given que eu acesse a pagina inicial do portal

    Scenario: Concursos
        When clicar no icone de concursos
        And preencher os filtos desejados
        Then o usuário irá visualizar os concursos conforme os filtros