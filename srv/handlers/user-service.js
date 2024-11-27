const cds = require("@sap/cds");
module.exports = class UserService extends cds.Service {
  init() {
    this.on("READ", "me", ({ tenant, user, locale }) => ({
      tenant,
      user,
      locale,
    }));

    this.on("login", (req) => {
      if (req.user._is_anonymous)
        req._res.set("WWW-Authenticate", 'Basic realm="Users"').status(401);
      else return this.read("me");
    });
  }
};
/*
不确定下面的理解是否正确：
此处继承的是 cds.Service，而不是 cds.ApplicationService，目的是为了这个模块的内容可以先于其他模块执行
在初始化过程中，cds.ApplicationService 会在 cds.Service 之后被初始化，因为它继承自 cds.Service。
*/
