const el = require('./Elements').ELEMENTS

class Concursos{

    validarTelaConcursos(){
        cy.get(el.iconeConcurso).click(),
        cy.get(el.texto).should('have.text',' Concursos  Página Inicial Concursos'),
        cy.get(el.dropdown).click()
        cy.get(el.opcaoStatus).click()
    }

    validarInformacaoConcursos(){
        cy.get(el.botaoPesquisar2).click()
        cy.get(el.tabelaConcursos).should('have.text','Descrição')
    }
}
export const concursosPage = new Concursos();