/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { portalPage } from '../../pages/portal.page';
import { despesasPage } from "../../pages/Despesas/Index";


Given("que eu acesse a pagina inicial do portal", () => {
    portalPage.acessarPortal();
})

When("eu clicar no icone Despesas", () => {
    despesasPage.validarTelaDespesa();
})

Then("deve ser exibida a pagina com informacoes das despesas", () => {
    despesasPage.validarInformacaoDespesas()
})