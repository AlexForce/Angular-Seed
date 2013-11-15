'use strict';

//The list of modules which will be used
//For earch rountes.. there is no need to specify the controller onto each template
eventsApp.controller("newEventController", 
		function newEventController(){
				
		});



eventsApp.controller("homeEventController", 
		function homeEventController($scope, $location, eventData){
			//Assigning events data form services to the scope variable
			$scope.events= eventData.getAllEvents();
		});


eventsApp.controller('viewEventController',
		function viewEventController($scope, $location, eventData){     
                      //Created a service called getAll events which returns the list of
                      $scope.event = eventData.viewEvent();
                      console.log($location.get(':eventId'));
		});



eventsApp.controller('loginController', 
                function loginController($scope, $location ,eventData){



                })