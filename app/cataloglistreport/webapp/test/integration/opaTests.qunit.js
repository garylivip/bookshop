sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bookshop/catalog/list/cataloglistreport/test/integration/FirstJourney',
		'bookshop/catalog/list/cataloglistreport/test/integration/pages/BooksList',
		'bookshop/catalog/list/cataloglistreport/test/integration/pages/BooksObjectPage',
		'bookshop/catalog/list/cataloglistreport/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bookshop/catalog/list/cataloglistreport') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);