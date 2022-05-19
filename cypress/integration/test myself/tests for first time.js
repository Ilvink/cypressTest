/// <reference types="cypress" />

it('first', () => {
cy.visit('/')
cy.contains('Реестр').click()
cy.get('#filterField-6-dateRange-from')
  .click()
  .type('19.05.2022')
  .should('have.value', '19.05.2022')
  .and('be.visible')
cy.contains('Показать').click()

})
it.only('first', () => {
  cy.visit('/')
  cy.contains('Реестр').click()
  cy.get('#filterField-6-dateRange-from')
    .click()
    .type('19.02.2022').then(input=> {
      expect(input).to.have.value('19.02.2022')
    })
  })