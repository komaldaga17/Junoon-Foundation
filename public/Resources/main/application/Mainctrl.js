var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('Mainctrl', function($http, $scope, $rootScope, $route, $location){
	$rootScope.initMain = function(){
		console.log("Saurabh Runs his first Angular App");
	}
	
	$rootScope.setRoute = function(route){
		$location.path(route);
		console.log(route);
		$rootScope.routeValue = route;
		console.log($location.path());
		
	}
});
junoonFoundation.config(function($routeProvider){
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
		otherwise({
			redirectTo	: '/home'
		})

});




