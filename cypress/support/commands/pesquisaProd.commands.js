var resultStatus
var resultBody
Cypress.Commands.add('pesquisaProdutoViaGET', () => { 
    cy.request({
        method: 'GET',
        url: `${Cypress.env('base_url')}/catalog/api/v1/products/search?name=HP ENVY x360 - 15t Laptop`,
      }).then((response) => {
        console.log(response.body)
          resultBody = JSON.stringify(response.body) 
          resultStatus = response
    })
    }) 

    Cypress.Commands.add('verificarProdutoNaPesquisaViaGET', () => {   
      expect(resultBody).to.include("HP ENV")
    }) 

    Cypress.Commands.add('validaRetornoPesquisaViaGET', () => {   
      expect(resultStatus).to.have.property('status',200)
    })



