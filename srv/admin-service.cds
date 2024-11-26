using { bookshop.v2024 as bookshop } from '../db/schema';

@impl: './handlers/admin-service.js'
@path: '/admin'
@requires: 'admin'

service AdminService {  
  entity Books as projection on bookshop.Books;
  entity Authors as projection on bookshop.Authors;
  entity Genres as projection on bookshop.Genres; 
  action add (x:Integer, y: Integer) returns Integer;
  // Post  http://localhost:4004/admin/add   body: {"x": 201, "y": 2}
  function subtract (x: Integer, y: Integer) returns Integer;
  // Get http://localhost:4004/admin/subtract(x=200,y=101)

}

//@(requires: 'authenticated-user') 
// annotate AdminService with @(requires: 'manager');
