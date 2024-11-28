using {Currency, managed, sap} from '@sap/cds/common';
namespace bookshop.v2024;

entity Books : managed{
  key ID : Integer;
  title  : localized String(111);
  descr  : localized String(1111);
  author : Association to Authors;
  genre  : Association to Genres;
  stock  : Integer;
  price  : Decimal(9,2);
  currency : Currency;
}

entity Authors : managed { 
  key ID : Integer;
  name   : String(111);
  dateOfBirth  : Date;
  dateOfDeath  : Date;
  placeOfBirth : String;
  placeOfDeath : String;  
  books  : Association to many Books on books.author = $self;
}

/** Hierarchically organized Code List for Genres */
entity Genres : sap.common.CodeList { 
  key ID   : Integer;
  parent   : Association to Genres;
  children : Composition of many Genres on children.parent = $self;
}

entity GenreHierarchy : Genres {
  hierarchyLevel : Integer default 0;
  drillState     : String default 'leaf';
  parent         : Association to GenreHierarchy;
  children       : Composition of many GenreHierarchy on children.parent = $self;
}