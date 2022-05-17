/// <reference types="cypress" /> 

const { endsWith } = require("cypress/types/lodash")

describe ('Our first suite', ()=>{

    it('first test', ()=>{

    cy.visit('/')
    cy.contains('Заказчики и Поставщики').click()

    //by Tag name
     cy.get('input')

     //by ID
     cy.get('#filterField-0-input')

     //by class name
     cy.get('.ng-tns-c108-5 ui-autocomplete ui-widget')

     //by attribute
     cy.get('[placeholder]')

     //by attribute and value
     cy.get('[placeholder="Введите значение"]')

     //by classValue
     cy.get('[class="ng-tns-c108-5 ui-autocomplete ui-widget"]')

     //by tagName and attribute with value
     cy.get('input[placeholder="Введите значение"]')

     //by two differect attribute
     cy.get('[placeholder="Введите значение"][aria-activedescendant]')

     //by tagName, attribut with value, ID and className
     cy.get('input[placeholder="Введите значение"]#filterField-0-input.filter-sidebar-item-wrapper')

     //the most recomended way by cypress

    })

    it('find class',()=>{

        cy.visit('https://agregatoreat.ru/')
        cy.get('a.menu__item.ng-star-inserted[href="/classifier/ktru-list"]').click()

    });

    it.only('findedit icon',()=>{
        cy.visit('https://rc.eot-agregator.ru/lk/customer/eat/announcement/332cf04f-9980-470e-9a71-af39e295232d/contract')
        cy.get('#Username').click()
        cy.get('#editIcon', {timeout: 60000}).find('[rect]').click();

    });

    
})