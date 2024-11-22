using {bookshop.v2024 as bookshop} from '../db/schema';
service CatalogService @(path: '/browse') {

    @readonly entity Books as select from bookshop.Books{
        *, author.name as author,
    } excluding { createdBy, modifiedBy};


    action submitOrder (book: Books:ID, quantity: Integer) returns String;
    

}