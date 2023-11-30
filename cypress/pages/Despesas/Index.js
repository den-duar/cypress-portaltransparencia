const el = require('./elements').ELEMENTS

class Despesas{

    validarTelaDespesas(){
        cy.get('[href="#/despesas/despesas-quadro-geral"] > .mat-icon').click(),
        cy.get('.alerta-ano').should('contain.text','Nesta página apenas são exibidos os resultados a partir de 2021')
        //cy.get('.text-uppercase')
    }
    validarInformacaoDespesas(){
        cy.get('#filtroAgrupamento > .ui-dropdown > .ui-dropdown-trigger > .ui-dropdown-trigger-icon').click()
        cy.get(':nth-child(6) > .ui-dropdown-item > .ng-star-inserted').click()
        cy.get(':nth-child(2) > div.ng-tns-c337-3 > .btn').click()
        cy.get(el.tabelaDespesas).should('have.text','Empenhado')
    }

}

export const despesasPage = new Despesas();