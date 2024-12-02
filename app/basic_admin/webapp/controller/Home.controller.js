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
    /* 
    从Fiori Launchpad打开应用，点击Home页面的书籍列表，会报错：
    Uncaught (in promise) Error: Missing template or factory function for aggregation items of Element sap.m.List#application-AdminApp-display-component---Home--dynamicBookList !
    直接访问应用，点击Home页面的书籍列表，不会报错。
    后面要解决这个问题。
    */
    });
});