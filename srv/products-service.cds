using { bookshop.v2024 as bookshop } from '../db/schema';

// @impl: './handlers/products-service.js'
@path: '/products'
// @requires: 'admin'

service ProductsService {  
  // The following service definition is for Data Binding Tutorial
  entity Products as projection on bookshop.Books;  
}

