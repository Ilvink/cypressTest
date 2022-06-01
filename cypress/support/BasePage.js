export class BasePage{

    open(url){
        cy.visit(url)

    }
   loginwithCustomer(){
       cy.contains('Личный кабинет').click()
       .get('span')
   }

}

export const basePage = new BasePage()