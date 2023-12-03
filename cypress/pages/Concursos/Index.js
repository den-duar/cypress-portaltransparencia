const el = require('./Elements').ELEMENTS

class Concursos{

    validarTelaConcursos(){
        cy.get().click(),
        cy.get().should('contain.text','')
    }
    validarInformacaoConcursos(){
        cy.get().click()
        cy.get().click()
        cy.get().click()
        cy.get().should('have.text','')
    }
}
export const concursosPage = new Concursos();