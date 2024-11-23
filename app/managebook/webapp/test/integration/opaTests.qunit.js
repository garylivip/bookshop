sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bookshop/admin/managebook/test/integration/FirstJourney',
		'bookshop/admin/managebook/test/integration/pages/BooksList',
		'bookshop/admin/managebook/test/integration/pages/BooksObjectPage',
		'bookshop/admin/managebook/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bookshop/admin/managebook') + '/index.html'
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