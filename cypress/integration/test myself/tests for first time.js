/// <reference types="cypress" />


it('type', ()=> {
cy.visit('/')
cy.contains('Личный кабинет').click()
.get('.lk-menu-item__title').eq(1).click()
.get('[placeholder="Логин"]').type('somethink')
})

it('focus', ()=> {
    cy.visit('/')
    cy.contains('Личный кабинет').click()
    .get('.lk-menu-item__title').eq(1).click()
    .get('[placeholder="Логин"]')
    .focus()
});

it('blur', ()=> {
        cy.visit('/')
        cy.contains('Личный кабинет').click()
        .get('[href="/lk/customer"]').click()   
    cy.get('#RememberLogin')
    .check({force: true})
    .wait(2000)
    .uncheck({force: true})        
});

it('blur', ()=> {
cy.visit('/')
.get('[href="/feedback"]').eq(1)
.wait(2000)
.scrollIntoView()       
});

it.only('blur', ()=> {
    cy.visit('/')
    cy.scrollTo(0,550)      
});
