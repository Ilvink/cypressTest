export class BasePage{

    open(url){
        cy.visit(url)

    }
   loginwithCustomer(){
       cy.contains('Личный кабинет').click()
        .get('.lk-menu-item__title').eq(1).click()
        .get('[placeholder="Логин"]').type('customer')
        .get('#passwordInput').type('customer')
        .get('button[type="submit"]').should('be.visible').click()
        
   }

}

export const basePage = new BasePage()