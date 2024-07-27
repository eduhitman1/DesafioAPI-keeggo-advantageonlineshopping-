import 'cypress-file-upload';
const { expect } = require("chai");


const authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozMzk1MTU3ODIsInN1YiI6ImlhbWVkdWFyZG9uZWlsbCIsInJvbGUiOiJVU0VSIn0.o98m5JVg5pg1KfLNmAPITZhmO2x3h44t5GSoN9KicgY`
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

var resulstatus ;

Cypress.Commands.add('pesquisaProdutoViaGET', () => { 
    cy.request({
        method: 'GET',
        // url: `${API_URL}/me`,
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=HP ENVY x360 - 15t Laptop`,
        headers: { authorization: authorization }
      }).then((response) => {
        console.log(response.body)
        expect(JSON.stringify(response.body)).to.include("HP ENV")
        expect(response).to.have.property('status',200)
    })
    }) 


Cypress.Commands.add('atualizaImagemProdutoPOST', () => { 
  
  cy.fixture("logo.jpg", 'binary')
  .then((file) => Cypress.Blob.binaryStringToBlob(file))
  .then((blob) => {
      var formdata = new FormData();
      formdata.append("file", blob, "logo.jpg");

      cy.request({
          url: "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16",
          method: "POST",
          headers: {
              "authorization": authorization,
              'content-type': 'multipart/form-data',      
          },
          body: formdata
      }).should(({ status, body, response }) => {
              console.log(body)
              console.log(status)
              expect(status).to.eq(200)
      
      // .then(response => {
      //             console.log(response.body.toString())  
      //             expect(response.status).to.equal(200);
      //             console.log(JSON.stringify(response.body))            
      //           })

      
      // .its('status').should('be.equal', 200)
  })
})
//   cy.readFile(`cypress/fixtures/logo.jpg`).then((str) => {
//     let blob = new Blob([str], { type: "multipart/form-data; boundary=----CypressFormDataBoundary" });
//     let formData = new FormData();
//     formData.append("file", blob);
//     const fileBody = [
//         "--someBoundaryGuidGeneratedByYou",
//         'Content-Disposition: form-data; name="file"; filename="logo"',
//         "Content-Type: multipart/form-data; boundary=<calculated when request is sent>\r\n",
//         str,
//         "--someBoundaryGuidGeneratedByYou--\r\n",
//     ].join("\r\n");
//     cy.request({
//         method: "POST",
//         url:
//             "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16",
//         body: fileBody ,
//         headers: {
//             "content-type": "multipart/form-data; boundary=<calculated when request is sent>",
//             'content-Length': '<calculated when request is sent>',
//             'host': '<calculated when request is sent>',
//             "authorization": authorization
//         },
//     });
// });  


  // cy.fixture('logo.jpg').then((sites) => {
  //   cy.request({
  //     url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16',
  //     method: 'post',
  //     form: true,
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //       'content-Length': '<calculated when request is sent>',
  //       'host': '<calculated when request is sent>',
  //     },
  //     files: {
  //       file: "https://www.infojobs.com.br/HandlerImageDocs.ashx?id=683659F814ADC7D530E12FCAEE44BC97&type=2&path=082813C7105ECF023A1DE2417E2006B7343EB7DC7D4FAA696BEB5840CC176CEA&server=0"
  //     }
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // })


  // EXIBI O ARQUIVO NO BODY
  // cy.fixture("logo.jpg", 'binary')
  //     .then(file => {
  //         const blob = Cypress.Blob.binaryStringToBlob(file, 'image/jpg');
  //         cy.request({
  //             method: 'POST',
  //             url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16',
  //             body: {file: blob},
  //           headers: {
  //                 "authorization": authorization,
  //                 // "cache-control": "no-cache",
  //                 // "postman-token": "<calculated when request is sent>",
  //                 // "Content-Type": "multipart/form-data",
  //                 // "content-type": "multipart/form-data; boundary=----CypressFormDataBoundary",
  //                 // "content-type": "multipart/form-data; boundary=<calculated when request is sent>",
  //                 "content-Length": "<calculated when request is sent>",
  //                 // "host": "<calculated when request is sent>",
  //                 // "server":"nginx/1.18.0 (Ubuntu)",
  //                 // "content-type": "application/json",
  //                 // "X-Content-Type-Options": "nosniff",
  //                 // "X-XSS-Protection":"1; mode=block",
  //                 // "X-Frame-Options":"DENY",
  //                 // "vary":"accept-encoding",
  //                 // "Content-Encoding": "gzip",
  //                 // "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  //                 // "user-agent": "PostmanRuntime/7.40.0",
  //                 // "accept": "*/*",
  //                 // "accept-encoding": "gzip, deflate, br",
  //                 // "connection": "keep-alive",
  //             }
              
  //         }).then(response => {
  //           console.log(JSON.stringify(response.body))  
  //           // expect(response.status).to.equal(200);
  //             // importRunId = response.body.id.toString();
  //         })
  //       })

//Declarations
// const fileName = 'logo.jpg';
// const method = 'POST';
// const url = 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16';
// const fileType = 'image/jpg';
// // // Get file from fixtures as binary
// cy.fixture(fileName, 'binary')
// .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin))
// .then((blob) =>{
//   const formData = new FormData();  
//   formData.append("file", blob, fileName);
//   form_request(method, url, formData, function (response){
//          console.log(response.body)

//   })
// })



//     // File in binary format gets converted to blob so it can be sent as Form data
//     Cypress.Blob.binaryStringToBlob(image, fileType).then((blob) => {

//         // Build up the form
//         const formData = new FormData();
//         formData.set('file', blob, fileName); //adding a file to the form
//         formData.set('input2', inputContent2); //adding a plain input to the form
        
//         // Perform the request
//         cy.form_request(method, url, formData, function (response) {
//             expect(response.status).to.eq(200);
//             // expect(expectedAnswer).to.eq(response.response);
//         });
//       })    
//     })
// })


//   cy.fixture("image.jpg", "binary").then( image => {
//     const blob = Cypress.Blob.binaryStringToBlob(image, "image/jpg");
//     const formData = new FormData();
//     formData.append("image", blob, "image.jpg");
//       cy.request({
//         method: "POST",
//         url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16',
//         body: formData,
//         headers: {
//           "content-type": "multipart/form-data",
//           "content-Length": "<calculated when request is sent>",
//           failOnStatusCode: false
//         }
//   })
// })


  // cy.fixture('image.jpg', 'binary').then( image => {
  //   const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpg');
  //   const formData = new FormData();
  //   formData.append("file", new Blob([image], { type: "image/jpg" }), "image.jpg");
  
  //     cy.request({
  //       method: 'POST', 
  //       url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16',
  //       body: formData,
  //       headers: {
  //         'content-type': 'multipart/form-data',
  //         'content-Length': '<calculated when request is sent>',
  //       },
  //     })
  //   })
  


//   cy.fixture("logo.jpg", "binary").then((image) => {
//     const payload = new FormData();
//     payload.append("userName", "random user name");
//     payload.append("email", "random email");
//     payload.append("file", new Blob([image], { type: "image/jpg" }), "logo.jpg"); 
  
//   cy.request({
//     method: "POST",
//     url: "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16",
//     body: payload,
//     headers: {
//       "Content-Type": "multipart/form-data",
//       'content-Length': '<calculated when request is sent>'
//     },
//   })
// });
  
  // cy.readFile(`cypress/fixtures/image.jpg`).then((str) => {
  //   let blob = new Blob([str], { type: "multipart/form-data" });
  //   let formData = new FormData();
  //   formData.append("file", blob);
  //   const fileBody = [
  //       "--someBoundaryGuidGeneratedByYou",
  //       'Content-Disposition: form-data; name="file"; filename="image.jpg"',
  //       "Content-Type: multipart/form-data\r\n",
  //       str,
  //       "--someBoundaryGuidGeneratedByYou--\r\n",
  //   ].join("\r\n");
  //   cy.request({
  //       method: "POST",
  //       url:
  //           "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16",
  //       body: fileBody ,
  //       headers: {
  //           "content-type": "multipart/form-data; boundary=someBoundaryGuidGeneratedByYou",
  //           'authorization': authorization,
  //           'content-Length': '<calculated when request is sent>',
  //       },
  //   });
  // })
  
  // cy.fixture('image.jpg', 'binary').then( image => {
  //   const blob = Cypress.Blob.binaryStringToBlob(image, 'image/jpg');
  //   const formData = new FormData();
  //   formData.append('file', blob, 'image.jpg');
  
  //     cy.request({
  //       method: 'POST', 
  //       url: 'https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16',
  //       body: formData,
  //       headers: {
  //         'content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
  //         'content-Length': '<calculated when request is sent>',
  //         'authorization': authorization,
  //         failOnStatusCode: false
  //       },
  //     }).then((response) =>{
  //       console.log(response.body)

  //     })
  //   })
  
  // const formData = new FormData();
  // formData.set('file', new File(['data'], 'image.jpg'), 'image.jpg');  
  // cy.request({
  //       method: 'POST',
  //       url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/339515782/caminho/azul?product_id=16`,
  //       body: formData,
  //   headers: {
  //     'content-type': 'multipart/form-data',
  //     'content-Length': '<calculated when request is sent>',
  //     authorization: authorization
  //   },
  //     }).then((response) => {
  //       console.log(response)
  //   })
    




});

 Cypress.Commands.add('validarResultadoBuscoProduto', () => { 
    expect(resulstatus).to.eq(200)
 })