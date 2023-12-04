/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps"

import { painelCovidPage } from "../../pages/Covid/Index";

When("eu clicar no botao do covid", () => {
    painelCovidPage.clicarCovid();
})

Then("deve ser exibida a pagina com informacoes do covid", () => {
    painelCovidPage.validarTelaPainelCovid()
})