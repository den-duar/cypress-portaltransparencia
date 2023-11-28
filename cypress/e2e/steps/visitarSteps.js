/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { portalPage } from '../../pages/portal.page';


Given("que eu acesse a pagina inicial do portal", () => {
    portalPage.acessarPortal();
})

When("eu clicar no botao do covid", () => {
    portalPage.clicarCovid()
})

Then("deve ser exibida a pagina com informacoes do covid", () => {
    portalPage.validarTelaCovid()
})