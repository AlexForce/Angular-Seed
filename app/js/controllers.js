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
		function viewEventController($scope, $routeParams, eventData){
                        //The routeParams parameter contains all the route parameter     
                      //Created a service called getAll events which returns the list of
                      $scope.event = eventData.viewEvent($routeParams.eventId);
                      console.log($scope.event);
		});



eventsApp.controller('loginController', 
                function loginController($scope, $location ,eventData){



                })