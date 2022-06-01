
export class CreationPurchase{

    createNewPurchase(){
        cy.contains('Создать закупку').click()
        .get('[placeholder="Наименование товара, работ, услуг"]').type('AutoTest')
        .get('[formcontrolname="purchaseTypeSetting"]').click()
        .contains('Закупка по п.5.2 ч.1 ст.93 Закона №44-ФЗ').click()
        .get('[for="radioButtonGroup-0"]').click()
        .get('[placeholder="Условие оплаты"]').click()
        .get('[aria-label="Предоплата"]').click()
        .get('#lotPrepaidAmount').should('be.visible').type('54')
        .get('[placeholder="Продолжительность закупочной сессии"]').click()
        .get('[aria-label="2"]').should('be.visible').click()
        .get('[class="prolongation-control ng-star-inserted"]').find('[role="checkbox"]').click()
        .get('[formcontrolname="contractSignDate"]').type('03.06.2022')
        .get('[inputid="deliveryDateInDays"]').find('[class="ui-chkbox ui-widget"]').click()
        .get('#deliveryPeriod').should('be.visible').type('35')
        .get('#lotDealTerminationInfo').type('Somethink very important')
    }


}

export const creationPurchase = new CreationPurchase()