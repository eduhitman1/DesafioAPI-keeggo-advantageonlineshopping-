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