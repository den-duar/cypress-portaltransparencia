const el = require('./Elements').ELEMENTS

class Despesas{

    validarTelaDespesas(){
        cy.get(el.iconeDespesa).click(),
        cy.get(el.mensagem).should('have.text','Nesta página apenas são exibidos os resultados a partir de 2021')
    }
    validarInformacaoDespesas(){
        cy.get(el.campoAgrupamento).select('PROGRAMA'),
        cy.get(el.botaoPesquisar).click()
        cy.get(el.tabelaDespesas).should('have.text','Empenhado')
    }

}

export default new Despesas()