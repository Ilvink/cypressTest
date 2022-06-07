/// <reference types="cypress" />

it('API test', () =>{
    const reqBody ={
        "page": 1,
        "size": 10,
        "isReviewAwaiting": false,
        "isCustomerSendingAwaiting": false,
        "isCustomerSigningAwaiting": false,
        "isSupplierSigningAwaiting": false,
        "isChangeDealTermsProtocolReceived": false,
        "isWinner": false,
        "isLoser": false,
        "searchText": "",
        "purchaseName": "",
        "number": "111111100122102287",
        "lotItemEatCodes": [],
        "productCode": null,
        "okpd2Codes": [],
        "ktruCodes": [],
        "purchaseTypeIds": [],
        "types": [],
        "customerId": null,
        "customerNameOrInn": null,
        "customerInn": null,
        "customerKpp": null,
        "supplierNameOrInn": null,
        "purchaseMethods": [
            4
        ],
        "priceStart": null,
        "priceEnd": null,
        "deliveryAddressRegionCodes": [],
        "deliveryAddress": null,
        "contractPriceStart": null,
        "contractPriceEnd": null,
        "applicationFillingStartDate": null,
        "applicationFillingEndDate": null,
        "contractSignDateStart": null,
        "contractSignDateEnd": null,
        "deliveryDateStart": null,
        "deliveryDateEnd": null,
        "isSmpOnly": false,
        "isEatOnly": false,
        "stateDefenseOrderOnly": null,
        "createDateTime": null,
        "excludeCancelledByCustomer": false,
        "excludeExternalTrades": false,
        "publishDateBegin": null,
        "publishDateEnd": null,
        "updateDateBegin": null,
        "updateDateEnd": null,
        "applicationFillingStartDateBegin": null,
        "applicationFillingStartDateEnd": null,
        "customerContractNumber": null,
        "hasLinkedExternalTrade": null,
        "eisTradeNumber": null,
        "isSpecificSupplier": false,
        "isRussianItemsPurchase": null,
        "organizerRegion": null,
        "lotStates": [],
        "sort": [
            {
                "fieldName": "publishDate",
                "direction": 2
            }
        ]
    }
    const Headers = {
        authority:"tender-cache-api.rc.eot-agregator.ru"
    }
  cy.request({
      method: "POST",
      url: "https://tender-cache-api.rc.eot-agregator.ru/api/TradeLot/list-published-trade-lots",
      body: reqBody,
      headers: Headers
  }).then((responce)=>{
        console.log(responce.body);
    });
});