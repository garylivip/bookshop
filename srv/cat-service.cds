using {bookshop.v2024 as bookshop} from '../db/schema';

@path: '/browse'
@impl: './handlers/cat-service.js'

service CatalogService  {

    /** For displaying lists of Books */
    @readonly entity ListOfBooks as projection on Books
    excluding { descr };
        
    /** For display in details pages */
    @readonly entity Books as projection on bookshop.Books { *,
        author.name as author
    } excluding { createdBy, modifiedBy };

    @requires: 'authenticated-user'
    action submitOrder (book: Books:ID, quantity: Integer) returns { stock: Integer };
    event OrderBook: { book: Books:ID; quantity: Integer; buyer: String };   

}