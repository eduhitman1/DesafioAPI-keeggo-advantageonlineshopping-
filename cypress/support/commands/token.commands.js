const loginAcesso = require('../../fixtures/jsonLoginAcesso.json')

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




 
