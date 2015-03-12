'use strict'

// This module is the main module of the Junoon Foundation and
// We are going to config and add controller so that we can insert our business logic

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('Mainctrl', ['$http', '$scope', '$rootScope', '$route', '$location', function($http, $scope, $rootScope, $route, $location){
	$rootScope.initMain = function(){
		console.log("Control comes to the main controller");
	}
	//Root variable to keep track of the active tab.
	$rootScope.homePath='/home';
	$rootScope.workPath='/work';
	$rootScope.contactPath='/contact';
	$rootScope.aboutPath='/about';
	$rootScope.activeRoute='/home';
	//This function is to update the location path so that user goes to the appropriate page
	$rootScope.setRoute = function(route){
		$location.path(route);
		console.log(route);
		$rootScope.routeValue = route;
		$rootScope.activeRoute = $location.path();
		console.log(typeof(route));
		
	}
}]);
// Using Route Provider Module for multiple views and templating in short setting the application configuration
junoonFoundation.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/home',
		{
			templateUrl	: 'Resources/main/home/views/home.html',
			controller	: 'HomeCtrl'
		}).
		when('/work',
		{
			templateUrl	: 'Resources/main/work/views/work.html',
			controleer	: 'WorkCtrl'
		}).
		when('/about', 
		{
			templateUrl : 'Resources/main/about/views/about.html',
			controller	: 'AboutCtrl'
		}).
		when('/contact', 
		{
			templateUrl : 'Resources/main/contact/views/contact.html',
			controller	: 'ContactCtrl'
		}).
		when('/edit-home',
		{
			templateUrl : 'Resources/edit/home/views/home-edit.html',
			controller	: 'EditHomeCtrl'
		}).
		otherwise(
{			redirectTo	: '/home'
		})

}]);




