using {bookshop.v2024 as bookshop} from '../db/schema';

@path: '/browse'
@impl: './handlers/cat-service.js'
service CatalogService  {

    @readonly entity DenormalizedViewsBooks as select from bookshop.Books{
        *, author.name as author,
    } excluding { createdBy, modifiedBy};

    @readonly entity Books as select from bookshop.Books{
        *, author.name as author,
    } excluding { createdBy, modifiedBy};

    action submitOrder (book: DenormalizedViewsBooks:ID, quantity: Integer) returns String;
    

}