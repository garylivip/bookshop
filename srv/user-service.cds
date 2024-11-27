@path: '/user'
@impl: './handlers/user-service.js'
service UserService {
    @odata.singleton
    entity me @cds.persistence.skip {
        id     : String;
        locale : String;
        tenant : String;
    }

    action login() returns me;


}
