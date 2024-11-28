// File: genres-service.cds
using {CatalogService} from './cat-service';
using {bookshop.v2024 as bookshop} from '../db/schema';

extend service CatalogService {
    @readonly entity GenreHierarchy as projection on bookshop.GenreHierarchy;
}