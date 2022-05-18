/// <reference types="cypress" />

it('first', () => {
cy.visit('/')
cy.contains('Каталог')
})