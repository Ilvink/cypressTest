/// <reference types="cypress" />

it('API test',()=>{
    cy.request('https://rc.eot-agregator.ru/')
    .then((responce)=>{
        console.log(responce)
    })
})