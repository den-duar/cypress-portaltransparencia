const el = require('./elements').ELEMENTS

class Despesas{

    validarTelaDespesas(){
        cy.get('[href="#/despesas/despesas-quadro-geral"] > .mat-icon').click(),
        cy.get('.alerta-ano').should('contain.text','Nesta página apenas são exibidos os resultados a partir de 2021')
        //cy.get('.text-uppercase')
    }
    validarInformacaoDespesas(){
        cy.get('.ui-dropdown-label-container > .ng-tns-c192-5').select(6)
        cy.get(el.botaoPesquisar).click()
        cy.get(el.tabelaDespesas).should('have.text','Empenhado')
    }

}

export const despesasPage = new Despesas();