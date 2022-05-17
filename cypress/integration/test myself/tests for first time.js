/// <reference types="cypress" />


it('first test',()=>{
cy.visit('/')
cy.contains('Каталог').click()
cy.get('.categories > :nth-child(1)').click()

})

it ('second test', ()=>{
    cy.visit('/')
    cy.contains('Заказчики и Поставщики').click()

    cy.get('#filterField-4-autocomplete').parents('form')
      .get('button#applyFilterButton')
      .parents('div')
      .get('[for="filterField-2-checkboxGroup-0"]').click()
      
   })

   it('then and wrap method',() =>{
    cy.visit('/')
    cy.contains('Личный кабинет').click()
    cy.get('[href="/lk/customer"]').click()

    cy.get('[placeholder="Логин"]').invoke('text').then(text =>{
      expect('Username').to.equal('Username')
   })
   cy.get('[class="mx-auto"]').find('[for="RememberLogin"]').click()


   })
   it.only('getDate',() =>{
    cy.visit('/')
    cy.contains('Реестр').click()
    cy.get('#filterField-6-dateRange-from').click()
    cy.get('table').contains('17').click().invoke('prop', 'value').then(prop =>{
      expect(prop).to.contain('17.05')
    })
   })

it('find and eq',() =>{
  cy.visit('/')
  cy.get('.menu-container').find('a').eq(0)
});