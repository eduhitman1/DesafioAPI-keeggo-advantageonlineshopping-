
const jsonPOST = require('../fixtures/jsonPOST.json')
const jsonPUT = require('../fixtures/jsonPUT.json')

const API_URL = Cypress.env('API_BASE_URL')
// const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`
const authorization = `Bearer tfp_81BGk3wHXWvAx1DSc1NqTURbPgGxNKqjKMq4V2kaQ7J7_3sp77ZefeGrXnN`


it('GET retrieves my user information', () => {
  cy.request({
    method: 'GET',
    // url: `${API_URL}/me`,
    url: `https://api.typeform.com/me`,
    headers: { authorization: authorization }
  }).should(({ status, body, response }) => {
    const { alias, email, language, user_id, tracking_id } = body
    
    console.log(body)
    expect(response.status).to.equal(200)
    expect(status).to.eq(200)
    expect(alias).to.eq('Eduardo Matias')
    expect(email).to.eq('edu.hitman01.eh@gmail.com')
    // expect(email).to.eq(Cypress.env('username'))
    expect(language).to.eq('en')
    expect(user_id).to.eq('01F4VQF6HGD4PS7ASZ645YQ22P')
    expect(tracking_id).to.eq(18154918)
  })
})

it('GET https://fakestoreapi.com/products', () => {
  cy.request({
    method: 'GET',
    // url: `${API_URL}/me`,
    url: `https://fakestoreapi.com/products`,
    headers: { authorization: authorization }
  }).should(({ status, body }) => {
    const { } = body
    console.log(body)
    expect(status).to.eq(200)
  })
})

it('POST https://fakestoreapi.com/products', () => {
  cy.request({
    method: 'POST',
    url: `https://fakestoreapi.com/products`,
    headers: { authorization: authorization },
    body: jsonPOST
  }).should(({ status, body }) => {
  console.log(body)
  expect(status).to.eq(200)
})
})

it('DELETE https://fakestoreapi.com/products', () => {
  cy.request({
    method: 'DELETE',
    url: `https://fakestoreapi.com/products/7`,
    headers: { authorization: authorization },
  }).should(({ status, body }) => {
  console.log(body)
  expect(status).to.eq(200)
})
})

it('UPDATE https://fakestoreapi.com/products', () => {
  cy.request({
    method: 'PUT',
    url: `https://fakestoreapi.com/products/7`,
    headers: { authorization: authorization },
    body: jsonPUT
  }).should(({ status, body }) => {
  console.log(body)
})
})

