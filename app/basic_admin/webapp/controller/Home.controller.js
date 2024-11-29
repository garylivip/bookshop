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
            return quantity >20 
                ? oCurrency.formatValue([price * quantity, currency], "string")
                : "Out of Stock";
            // return `${price * quantity} ${currency} `;
        },
        formatStockQuantity(quantity) {
            if (!quantity) {return " ";
            }
            return quantity > 20 ? quantity : "Out of Stock";
        },
        onBookPress(oEvent) {
            const oItem = oEvent.getSource();
            const oCtx = oItem.getBindingContext();
            const sPath = oCtx.getPath();
            const oBookDetailsHeader = this.byId("bookDetailsHeader");
            oBookDetailsHeader.bindElement(sPath);

        },
        productListFactory(sId, oContext) {
            let oUIControl;
            if (oContext.getProperty("stock") > 30) {
                oUIControl = this.byId("bookExtendedView").clone(sId);
            } else {
                oUIControl = this.byId("bookSimpleView").clone(sId);
            }
          
           return oUIControl;
        }
    });
});