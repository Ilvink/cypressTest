export class BasePage{

    open(url){
        cy.visit(url)
    }

}

export const basePage = new BasePage()