class PortalPage {

    acessarPortal() {
        cy.visit('/')
    }

    clicarCovid() {
        cy.get('[href="#/covid-vacinacao/vacinometro"] > .mat-icon').click()
    }

}


export const portalPage = new PortalPage()