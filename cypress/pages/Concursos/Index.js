const el = require('./Elements').ELEMENTS

class Concursos{

    validarTelaConcursos(){
        cy.get(el.iconeConcurso).click(),
        cy.get().should('contain.text','')
    }
    validarInformacaoConcursos(){
        cy.get(el.dropdown).click()
        cy.get(el.opcaoStatus).click()
        cy.get().click()
        cy.get().should('have.text','')
    }
}
export const concursosPage = new Concursos();