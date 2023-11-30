const el = require('./Elements').ELEMENTS

class LinksUteis{

    acessarSemob(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.get(el.linkSemob).click()
    }
    
    validarPaginaSemob(){
        cy.wait(2000); 
        cy.get(el.logoSemob).should('exist').should('be.visible');
    }
}

export const linkPage = new LinksUteis();