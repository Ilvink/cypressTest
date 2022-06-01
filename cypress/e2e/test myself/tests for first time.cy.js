/// <reference types="cypress" />

import { basePage, BasePage } from "../../support/BasePage";
import {creationPurchase, CreationPurchase} from "../../support/CreationPurchase"

it("Tests with PageObject", () =>{
    basePage.open("/")
    basePage.loginwithCustomer()
    creationPurchase.createNewPurchase()
    
})
