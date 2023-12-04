const el = require('./Elements').ELEMENTS

class PainelCovidPage{

    clicarCovid() {
        cy.get(el.botaoCovid).click()
    }

    validarTelaPainelCovid(){
        cy.get(el.totalDosesApli).should('contain', 'Total de doses aplicadas')
        cy.get(el.primeirasDoses).should('contain', 'Total de primeiras doses aplicadas')
        cy.get(el.segundasDoses).should('contain', 'Total de segundas doses aplicadas')
        cy.get(el.terceirasDoses).should('contain', 'Total de terceiras doses aplicadas')
        cy.get(el.quartasDoses).should('contain', 'Total de quartas doses aplicadas')
        cy.get(el.totalDosesReceb).should('contain', 'Total de doses recebidas')
    }

}

export const painelCovidPage = new PainelCovidPage();