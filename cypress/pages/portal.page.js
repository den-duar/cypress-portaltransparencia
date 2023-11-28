class PortalPage {

    acessarPortal() {
        cy.visit('/')
    }

    clicarCovid() {
        cy.get('[href="#/covid-vacinacao/vacinometro"] > .mat-icon').click()
    }

    validarTelaCovid(){
        cy.get(':nth-child(1) > :nth-child(1) > .titulo').should('contain', 'Total de doses aplicadas')
    }

}


export const portalPage = new PortalPage()