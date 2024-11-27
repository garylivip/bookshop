const cds = require('@sap/cds');

module.exports = cds.on("served", async () => {
    await UPSERT.into("sap.common.Currencies")
        .columns("code", "symbol", "name", "descr", "minorUnit")
        .rows(
            ["EUR", "€", "Euro", "Euro currency", 2],
            ["USD", "$", "US Dollar", "United States Dollar", 2],
            ["GBP", "£", "British Pound", "Pound Sterling", 2],
            ["ILS", "₪", "Shekel", "Israeli Shekel", 2],
            ["JPY", "¥", "Yen", "Japanese Yen", 0],
            ["CNY", "¥", "Renminbi","Chinese Yuan", 2]
        );
});
