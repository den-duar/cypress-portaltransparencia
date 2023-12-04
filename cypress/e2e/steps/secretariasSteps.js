/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { orgaosSecretariasPages } from "../../pages/OrgaosSecretarias/Index";
import { portalPage } from "../../pages/portal.page";

Given ('que eu acesse a pagina inicial do portal', ()=>{
    portalPage.acessarPortal()
})

When ('clicar no icone de orgãos e Secretarias' , ()=>{
    orgaosSecretariasPages.clicarSecretarias();
})

Then ('ser direcionado para pagina com informações das secretarias', ()=>{
    orgaosSecretariasPages.validarTelaSecretarias();
})