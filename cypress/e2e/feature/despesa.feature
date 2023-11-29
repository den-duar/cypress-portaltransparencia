#language: pt
Funcionalidade: Acessar pagina de despesas

Contexto:
    Dado que eu acesse a pagina de despesas do portal

    Cenario: Despesas quadro geral
        Quando eu clicar no icone de despesas
        Quando eu selecionar as opções dos filtros
        Quando eu clicar no botao pesquisar
        Então deve ser exibida a pagina com informacoes das despesas
        