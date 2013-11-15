'use strict';


//Create the module to be used 
var eventsApp= angular.module('eventsApp', ['ngResource', 'ngRoute'])
			.config(function($routeProvider){

				//Creating routes.
				$routeProvider
				.when('/newEvent', {
					templateUrl: 'templates/newEvent.html',
					controller: 'newEventController'})
				
				.when('/', {
					templateUrl: 'templates/home.html',
					controller: 'homeEventController'
				})
				.when('/home', {
					templateUrl: 'templates/home.html',
					controller: 'homeEventController'})
				
				.when('/viewEvent/:eventId', {
					templateUrl: 'templates/viewEvent.html', 
					controller: 'viewEventController'})

				.when('/login',{
					templateUrl: 'templates/login.html',
					controller: 'loginController'
				});

				//if a url was specified that it didnot know then the routeprovider.otherwise will be use to redirect to a default route
				//default route 
				$routeProvider.otherwise({ redirectTo:'/'});
			});




	



