const el = require('./Elements').ELEMENTS

class OrgaosSecretarias {

    clicarSecretarias(){
        cy.get(el.botaoSecretarias).click();
    }

    validarTelaSecretarias(){
        cy.get(el.tituloSecUm).should('contain', 'SETRAMP' )
    }
}


export const orgaosSecretariasPages = new OrgaosSecretarias();