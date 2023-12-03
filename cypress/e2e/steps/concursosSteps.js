/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { portalPage } from '../../pages/portal.page';
import { concursosPage } from "../../pages/Concursos/Index";
import { despesasPage } from "../../pages/Despesas/Index";

Given("que eu acesse a pagina inicial do portal", () => {
	portalPage.acessarPortal();
});

When("clicar no icone de concursos", () => {
	despesasPage.validarTelaConcursos()
});

And("preencher os filtos desejados", () => {
	despesasPage.validarInformacaoConcursos()
});

Then("o usuário irá visualizar os concursos conforme os filtros", () => {
	despesasPage.validarInformacaoConcursos()
});
