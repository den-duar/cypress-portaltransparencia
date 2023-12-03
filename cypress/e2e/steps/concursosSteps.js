/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { portalPage } from '../../pages/portal.page';
import { concursosPage } from "../../pages/Concursos/Index";

Given("que eu acesse a pagina inicial do portal", () => {
	portalPage.acessarPortal();
});

When("clicar no icone de concursos", () => {
	concursosPage.validarTelaConcursos();
});

And("preencher os filtos desejados", () => {
	concursosPage.validarInformacaoConcursos();
});

Then("o usuário irá visualizar os concursos conforme os filtros", () => {
	concursosPage.validarInformacaoConcursos();
});
