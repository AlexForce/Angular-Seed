'use strict';

//The main controller for the application
function AppCtrl($scope,$http){


	//load the database 
	/*$http({method:"GET", url:'/process'})
		.success(function(data, status, headers, config){
			if(status != 200){
				alert('Error occur..');
			}

		})
		.error(function(data, status, headers, config){
			alert(data);
			console.error(status);

		});
	*/

	$scope.events=[{
			id: 1,
			name:"Solomon",
			imageUrl:"img/default.png",
			date: "2013-12-12",
			time: "12:12:00",
			description: "A simple event trial",
			status:'label-warning'
		},
		{	id: 2,
			name:"Peter",
			imageUrl:"img/car.jpg",
			date: "2013-12-12",
			time: "12:12:00",
			description: "A simple event trial",
			status:'label-success'
		},
		{
			id: 3,
			name:"Medullan Event",
			imageUrl: 'img/default.png',
			date: '2014-12-12',
			time: '1:1:1',
			description: 'A simple event to ... not sure as yet',
			status:'label-important'
		}
		];

		$scope.noEvents=null;

	//Setting the url for details view
	$scope.detailsUrl ="partials/edit.html";

	$scope.viewEvent= function(id){
		//View event when your clicks any where in this division
		$scope.editing = $scope.events[id-1];
		console.log($scope.editing);
	}


	$scope.deleteEvent = function(id){
		//Remove a particular event based on the id number.
		//set the event_visible to 0 rather than deleting it.
		
	}

	$scope.updateEvent = function(event){
		//Will be used to save and event to database
		console.log(event);
	}


	$scope.cancelEvent= function(){
		//Cancel event
		$scope.editing= null;

	}



	
}

