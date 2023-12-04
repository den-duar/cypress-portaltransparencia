const el = require('./Elements').ELEMENTS

class OrgaosSecretarias {

    clicarSecretarias(){
        cy.get(el.botaoSecretarias).click();
    }

    validarTelaSecretarias(){
        cy.get(el.tituloSecUm).should('contain', 'SETRAMP' )
        cy.get(el.tituloSecDois).should('contain', 'CGM')
        cy.get(el.tituloSecTres).should('contain', 'COMPDEC')
        cy.get(el.tituloSecQuartro).should('contain', 'EMLUR')
        cy.get(el.tituloSecCinco).should('contain', 'FUNJOPE')
        cy.get(el.tituloSecSeis).should('contain', 'IPM')
        cy.get(el.tituloSecSete).should('contain', 'PROGEM')
        
    }
}


export const orgaosSecretariasPages = new OrgaosSecretarias();