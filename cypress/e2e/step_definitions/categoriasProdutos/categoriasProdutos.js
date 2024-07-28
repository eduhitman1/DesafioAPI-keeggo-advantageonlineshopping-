import {Given, And, When} from 'cypress-cucumber-preprocessor/steps'

Given("que possuo um token de acesso", () =>{
    // cy.chamadaToken()
})

When("acesso busca de um produto via request GET catalog", () =>{
    cy.pesquisaProdutoViaGET()
})

When("verifico se a lista exibe somente produtos conforme a busca", () =>{
    cy.verificarProdutoNaPesquisaViaGET()    
})

When("valido o status code da resposta do serviço", () =>{
    cy.validaRetornoPesquisaViaGET()
})



When("acesso arquivo updade via request POST catalog", () =>{
    cy.atualizaImagemProdutoPOST()
})