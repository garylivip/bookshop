const cds = require('@sap/cds');
module.exports = cds.service.impl(async function() {
    const db = await cds.connect.to('db'); // connect to database service
    const { Books } = db.entities; // get reflected definitions

    this.on('submitOrder', async (req) => {
        const { book, quantity } = req.data;
        const result = await db.tx(req).run(
            UPDATE(Books)
            .set({ stock: { '-=': quantity } })
            .where({ ID: book, stock: { '>=': quantity } })
        );

        const updatedBook = await db.run(
            SELECT.one(Books).where({ ID: book })
        );      
        
        return result === 0 
            ? req.error(409, `Order failed, not enough stock for book ID ${book}, result: ${result}, Remaining stock: ${ updatedBook.stock }`)
            : `Order Submitted, you ordered ${quantity} copies of book ID ${book}, result: ${result}, Remaining stock: ${ updatedBook.stock }`;

    });




});