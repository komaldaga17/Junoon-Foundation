var junoonFoundation = angular.module('junoonFoundation');
junoonFoundation.controller('Mainctrl', function($http, $scope, $rootScope, $route, $location){
	$rootScope.initMain = function(){
		console.log("Saurabh Runs his first Angular App");
	}
	
	$rootScope.setRoute = function(route){
		$location.path(route);
		console.log(route);
		$rootScope.routeValue = route;
		
	}
});
junoonFoundation.config(function($routeProvider){
	$routeProvider.
		when('/home',
		{
			templateUrl : 'Resources/main/home/views/home.html',
			controller : 'HomeCtrl'
		}).
		when('/work',
		{
			templateUrl : 'Resources/main/home/views/home.html',
			controleer : 'HomeCtrl'
		})

})




