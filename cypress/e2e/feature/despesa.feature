#language: pt
Funcionalidade: Acessar pagina de despesas

Contexto:
    Dado que eu acesse a pagina inicial do portal

    Cenario: Despesas quadro geral
        Quando acessar a pagina de despesas do portal
        E eu selecionar as opções dos filtros e eu clicar no botao pesquisar
        Então deve ser exibida a pagina com informacoes das despesas
        