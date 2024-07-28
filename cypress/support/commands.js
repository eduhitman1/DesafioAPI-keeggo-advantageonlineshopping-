import 'cypress-file-upload';
const loginAcesso = require('../fixtures/jsonLoginAcesso.json')
const { expect } = require("chai");

const authorization = `Bearer ${Cypress.env('token')}`

var resultBody;
var resultStatus;
var objeto
var statusCode
var tokenAcesso

  Cypress.Commands.add('token', () => { 
    cy.request({
        method: 'POST',
        url: `${Cypress.env('base_url')}/accountservice/accountrest/api/v1/login`,
        body: loginAcesso,
        headers: { 
          'content-type': 'application/json',
        }
      }).then((response) => {
        console.log(JSON.stringify(response.body))
          
        tokenAcesso = response.body.statusMessage.token
        console.log(tokenAcesso)

        resultBody = JSON.stringify(response.body) 
        resultStatus = response
    })
    })


Cypress.Commands.add('pesquisaProdutoViaGET', () => { 
    cy.request({
        method: 'GET',
        url: `${Cypress.env('base_url')}/catalog/api/v1/products/search?name=HP ENVY x360 - 15t Laptop`,
        headers: { authorization: authorization }
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

Cypress.Commands.add('atualizaImagemProdutoPOST', () => { 
  cy.fixture("logo.jpg", 'binary')
  .then((file) => Cypress.Blob.binaryStringToBlob(file))
  .then((blob) => {
      var formdata = new FormData();
      formdata.append("file", blob, "logo.jpg");
      cy.request({
          url: `${Cypress.env('base_url')}/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16`,
          method: "POST",
          headers: {
              "authorization": authorization,
              'content-type': 'multipart/form-data',      
          },
          body: formdata
      }).should(({ status, body}) => {
              console.log(body)
              console.log(status)            
              statusCode = status
  })
})

Cypress.Commands.add('verificaAtributosObjeto', () => { 
  const object ={
             byteLength: 156,
             detached: false,
             maxByteLength: 156,
             resizable: false
             }
        objeto = object
})

Cypress.Commands.add('validaAtributosObjeto', () => { 
      assert.isObject(objeto, 'value is object') 
})

Cypress.Commands.add('validaRetornoDeServicoPOST', () => {  
       expect(statusCode).to.eq(200)
})

Cypress.Commands.add('tokenAcesso', () => { 
      cy.request({
          url: `${Cypress.env('base_url')}/accountservice/accountrest/api/v1/login`,
          method: "POST",
          headers: {
              'content-type': 'application/json',      
          },
          body: loginAcesso
      })
    })
  })

 
