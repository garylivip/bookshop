sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/DenormalizedViewsBooksList',
		'project1/test/integration/pages/DenormalizedViewsBooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, DenormalizedViewsBooksList, DenormalizedViewsBooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheDenormalizedViewsBooksList: DenormalizedViewsBooksList,
					onTheDenormalizedViewsBooksObjectPage: DenormalizedViewsBooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);