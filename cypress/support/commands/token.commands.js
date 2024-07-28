import 'cypress-file-upload';
const loginAcesso = require('../fixtures/jsonLoginAcesso.json')
const { expect } = require("chai");

const authorization = `Bearer ${Cypress.env('token')}`

var resultBody;
var resultStatus;

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




 
