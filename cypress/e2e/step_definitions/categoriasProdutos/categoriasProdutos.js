import {Given, And, When,Then} from 'cypress-cucumber-preprocessor/steps'

Given("que possuo um token de acesso", () =>{
    cy.token()
})


When("acesso busca de um produto via request GET catalog", () =>{
    cy.pesquisaProdutoViaGET()
})

And("verifico se a lista exibe somente produtos conforme a busca", () =>{
    cy.verificarProdutoNaPesquisaViaGET()    
})

Then("valido o status code da resposta do serviço", () =>{
    cy.validaRetornoPesquisaViaGET()
})




When("acesso arquivo updade via request POST catalog", () =>{
    cy.atualizaImagemProdutoPOST()
})

And("verifico que o objeto foi atualização corretamente", () =>{
    cy.verificaAtributosObjeto()
})

And("verifico o id da image nova inserida", () =>{
    cy.validaAtributosObjeto()
})

Then("valido que o código de resposta da requisição é 200", () =>{
    cy.validaRetornoDeServicoPOST()
})