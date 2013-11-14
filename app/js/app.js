'use strict';


//Create the module to be used 
var eventsApp= angular.module('eventsApp', ['ngRoute']);
	

eventsApp.config(['routeProvider',
	function(routeProvider){
		$routeProvider
			.when('/', {template: 'partials/home.html', controller: })
			.when('/new', {
				templateUrl: 'new.html',
				controller: 'NewCtrl'
			})
			.when('/login', {
				templateUrl: 'login.html',
				controller: 'LoginCtrl'
			});


	}]);



