'use strict';

//The main controller for the application
function AppCtrl($scope){
	$scope.events=[{
			id: 1,
			name:"Solomon",
			imageUrl:"img/default.png",
			date: "2013-12-12",
			time: "12:12:00",
			description: "A simple event trial"
		},
		{	id: 2,
			name:"Peter",
			imageUrl:"img/default.png",
			date: "2013-12-12",
			time: "12:12:00",
			description: "A simple event trial"
		},
		{
			id: 3,
			name:"Medullan Event",
			imageUrl: 'img/default.png',
			date: '2014-12-12',
			time: '1:1:1',
			description: 'A simple event to ... not sure as yet'
		}
		];

	//Setting the url for details view
	$scope.detailsUrl ="partials/edit.html";

	$scope.viewEvent= function(id){
		//View event when your clicks any where in this division
		$scope.editing = $scope.events[id-1];
		console.log($scope.editing);
	}


	$scope.deleteEvent = function(id){
		alert(id);
	}



	
}

