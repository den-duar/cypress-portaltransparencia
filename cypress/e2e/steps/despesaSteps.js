/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { despesasPage } from "../../pages/Despesas/Index";


When("acessar a pagina de despesas do portal", () => {
    despesasPage.validarTelaDespesas();
})
And("eu selecionar as opções dos filtros e eu clicar no botao pesquisar", () => {
    despesasPage.validarInformacaoDespesas();
})

Then("deve ser exibida a pagina com informacoes das despesas", () => {
    despesasPage.validarInformacaoDespesas()
})