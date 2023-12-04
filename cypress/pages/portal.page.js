class PortalPage {

    acessarPortal() {
        cy.visit('/')
    }

}


export const portalPage = new PortalPage()