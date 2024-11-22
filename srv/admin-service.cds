using { bookshop.v2024 as bookshop } from '../db/schema';
service AdminService {  
  entity Books as projection on bookshop.Books;
  entity Authors as projection on bookshop.Authors;
  entity Genres as projection on bookshop.Genres; 


  // action submitOrder (book: Books:ID, quantity: Integer) returns String;
  action add (x:Integer, to: Integer) returns Integer;
}
//@(requires: 'authenticated-user') 