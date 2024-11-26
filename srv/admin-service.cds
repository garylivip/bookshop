using { bookshop.v2024 as bookshop } from '../db/schema';

@impl: './handlers/admin-service.js'
@path: '/admin'
@requires: 'admin'

service AdminService {  
  // The following service definition will be consumed by frond-end applications.
  entity Books as projection on bookshop.Books;
  entity Authors as projection on bookshop.Authors;

  // The following code consists of some additional experimental exercises, which are consumed by Bruno.
  action add (x:Integer, y: Integer) returns Integer;  
  function subtract (x: Integer, y: Integer) returns Integer;
}

/* 
  The following code demonstrates some alternative methods for annotating.
  @(requires: 'authenticated-user') 
  annotate AdminService with @(requires: 'manager');
  service AdminService @(requires:'admin', path:'/admin') {

  The following code snippets illustrate how to call actions and functions, respectively.
  calling an action:  Post + http://localhost:4004/admin/add  +  body: {"x": 201, "y": 2}
  calling an function: Get http://localhost:4004/admin/subtract(x=200,y=101)
*/

