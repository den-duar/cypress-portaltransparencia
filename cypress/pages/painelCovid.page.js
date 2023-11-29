class PainelCovidPage{

    validarTelaPainelCovid(){
        cy.get(':nth-child(1) > :nth-child(1) > .titulo').should('contain', 'Total de doses aplicadas')
        cy.get(':nth-child(1) > :nth-child(2) > .titulo').should('contain', 'Total de primeiras doses aplicadas')
        cy.get(':nth-child(1) > :nth-child(3) > .titulo').should('contain', 'Total de segundas doses aplicadas')
        cy.get(':nth-child(4) > .titulo').should('contain', 'Total de terceiras doses aplicadas')
        cy.get(':nth-child(5) > .titulo').should('contain', 'Total de quartas doses aplicadas')
        cy.get(':nth-child(6) > .titulo').should('contain', 'Total de doses recebidas')
    }

}

export const painelCovidPage = new PainelCovidPage();