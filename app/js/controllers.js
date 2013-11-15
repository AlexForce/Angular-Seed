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
                      console.log($scope.event.id);
                
                      $scope.deleteEventFn = function(){
                              $scope.deleteEvent = eventData.deleteEvent($scope.event.id);
                                if($scope.deleteEvent){
                                        alert('event deleted');
                                }
                        };
		});



eventsApp.controller('loginController', 
                function loginController($scope, $location ,eventData){
                        //Click
                        $scope.cookie=eventData.loginEvent();
                        $scope.logoutFn= function(){
                                $scope.cookie= eventData.logoutEvent();
                        }

                        $scope.loginFn = function(){
                                $scope.cookie=eventData.loginEvent();
                        }


                });



