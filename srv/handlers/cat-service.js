const cds = require('@sap/cds');

module.exports = class CatService extends cds.ApplicationService {
    init() {
        const { Books } = this.entities; 

        this.after('each','ListOfBooks', (each) => {
            if (each.stock > 111) each.title += '  📚';
        }); 

        this.on('submitOrder', async (req) => {
            let { book: id, quantity } = req.data;
            if (!id) return req.error(400, `Book ID is missing`);
            if (!quantity) return req.error(400, `Quantity is missing`);
            if (quantity < 1) return req.error(400, `Quantity must be at least 1`);

            let book = await SELECT.one.from(Books).where({ ID: id }).columns('stock');
            if (!book) return req.error(404, `Book #${id} not found`);
            if (book.stock < quantity) return req.error(400, `Insufficient stock`);

            await UPDATE(Books, id).with({ stock: book.stock -= quantity });
            return book;   
        });

        this.after('submitOrder', async (_,req) => {
            const { book, quantity } = req.data;
            await this.emit('OrderBook', { book, quantity });
        })

        return super.init();
    }
}


/*
    const db = await cds.connect.to('db'); // connect to database service
    数据库连接 db 会被自动注入到这个模块中，不需要手动注入

    let book = await SELECT.from(Books, id, b => b.stock)
    等同于
    let book = await SELECT.one.
        from(Books).
        where({ ID: id }).
        columns('stock');
    1)Specifying a key argument automatically enables SELECT.one.
    2)id shorthand is used to specify the key value = { ID: id }
    3)Select columns/fields: Projection functions are the most recommended way
    https://cap.cloud.sap/docs/node.js/cds-ql#select
*/