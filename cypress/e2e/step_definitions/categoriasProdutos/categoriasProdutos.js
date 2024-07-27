import {Given, And, When} from 'cypress-cucumber-preprocessor/steps'

Given("que possuo um token de acesso", () =>{
    // cy.chamadaToken()
})

When("acesso busca de um produto via request GET catalog", () =>{
    cy.pesquisaProdutoViaGET()
})

When("acesso arquivo updade via request POST catalog", () =>{
    cy.atualizaImagemProdutoPOST()
})