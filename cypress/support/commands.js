import 'cypress-file-upload';
const { expect } = require("chai");

const authorization = `Bearer ${Cypress.env('token')}`

var objeto
var statusCode

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



 
