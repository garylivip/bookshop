sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/type/Currency"
], (Controller,Currency) => {
    "use strict";

    return Controller.extend("ns.basicadmin.controller.Home", {
        onInit() {
        },
        formatStockValue(price, quantity, currency) {
            const oCurrency = new Currency();
            return oCurrency.formatValue([price * quantity, currency], "string");
            // return `${price * quantity} ${currency} `;
        }
    });
});