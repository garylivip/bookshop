const cds = require('@sap/cds');

module.exports = class AdminService {
    async init() {
        this.db = await cds.connect.to('db'); // connect to database service
        this.Books = this.db.entities.Books; // get reflected definitions

        this.on('add', this.add);
        this.on('subtract', this.subtract);
        this.on('READ', 'Books', this.readBooks);
    }

    async add(req) {
        const { x, y } = req.data;
        return x + y;
    }

    async subtract(req) {
        const { x, y } = req.data;
        return x - y;
    }

    async readBooks(req) {
        return await this.db.read(this.Books);
    }
}

// module.exports = cds.service.impl(function() {
//     return new AdminService().init();
// });

