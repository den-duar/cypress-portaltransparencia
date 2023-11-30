/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { portalPage } from '../../pages/portal.page';
import {linkPage}from '../../pages/LinksUteis/Index';

Given("que eu acesse a pagina inicial do portal", () => {
    portalPage.acessarPortal();
});

When("clicar no link desejado", () => {
    linkPage.acessarSemob();
});

Then("o usuário sera redirecionado para a pagina escolhida", () => {
	linkPage.validarPaginaSemob();
});
