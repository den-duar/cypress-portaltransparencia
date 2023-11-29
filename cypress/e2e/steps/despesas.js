/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { portalPage } from '../../pages/portal.page';
import { despesas } from "../../pages/Despesas/Index";


Given("que eu acesse a pagina inicial do portal", () => {
    portalPage.acessarPortal();
})

When("eu clicar no icone Despesas", () => {
    despesas.validarTelaDespesa();
})

Then("deve ser exibida a pagina com informacoes das despesas", () => {
    despesas.validarInformacaoDespesas()
})