const cds = require('@sap/cds');

module.exports = class AdminService extends cds.ApplicationService{
    async init() {
        this.db = await cds.connect.to('db'); // 明天验证一下，这一句在这里有没有用
        this.before(['NEW', 'CREATE'], 'Authors', genid); // Multiple events can be passed as an array if they share the same handler
        this.before(['NEW', 'CREATE'], 'Books', genid);

        this.on('add', this.add);
        this.on('subtract', this.subtract);
        this.on('READ', 'Books', this.readBooks());
        
        return super.init();
    }

    add(req) {
        const { x, y } = req.data;
        return x + y;
    }

    subtract(req) {
        const { x, y } = req.data;
        return x - y;
    }
}

/* 
Generate Integer primary keys （Books.ID, Authors.ID) for target entity in request      
const { id } 是 const result = XXX   +   id = result.id 的简写
SELECT.one.from(req.target).columns('max(ID) as id') 会返回一个对象，对象中有一个属性叫做id
req.target 是请求的目标实体, 在这里是Authors或者Books
Increment the max ID by 1, starting from 1 if no ID exists
*/
async function genid (req) {
  if (req.data.ID) return;
  const { id } = await SELECT.one.from(req.target).columns("max(ID) as id");
  req.data.ID = id ? id + 1 : 1;
}
