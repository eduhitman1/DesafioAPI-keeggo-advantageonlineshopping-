When("acesso busca de um produto via request GET catalog", () =>{
  cy.pesquisaProdutoViaGET()
})

And("verifico se a lista exibe somente produtos conforme a busca", () =>{
  cy.verificarProdutoNaPesquisaViaGET()    
})

Then("valido o status code da resposta do serviço", () =>{
  cy.validaRetornoPesquisaViaGET()
})
