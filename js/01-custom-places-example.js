function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place 5.97881,10.1711
				canEdit: false,
				lat: 5.97881,
				lng:10.1711,
				name: "Greenspace Academy Office",
				street: "Adjacent the Baptist church",
				userData: 99
			},

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


