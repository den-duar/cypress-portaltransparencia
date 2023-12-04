/// <reference types="cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";
import {linkPage}from '../../pages/LinksUteis/Index';



When("clicar no link desejado", () => {
    linkPage.acessarSemob();
});

Then("o usuário sera redirecionado para a pagina escolhida", () => {
	linkPage.validarPaginaSemob();
});
