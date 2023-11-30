const el = require('./Elements').ELEMENTS

class Despesas{

    validarTelaDespesas(){
        cy.get(el.iconeDespesa).click(),
        cy.get(el.mensagem).should('contain.text','Nesta página apenas são exibidos os resultados a partir de')
    }
    validarInformacaoDespesas(){
        cy.get(el.campoAgrupamento).click()
        cy.get(el.programa1).click()
        cy.get(el.programa2).click()
        cy.get(el.tabelaDespesas).should('have.text','TabelaGráfico')
    }
}
export const despesasPage = new Despesas();