	var junoonFoundation = angular.module('junoonFoundation');
	
	junoonFoundation.controller('HomeCtrl', function($http, $scope, $rootScope, $route){
	$scope.init = function(){
		console.log("Control comes to HomeCtrl");
		var url = "Resources/JSON/home.json";
		$rootScope.homeActive=true;
		$http({
			url : url,
			method : 'GET',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).success(function(data,status,headers,config){
			$rootScope.home=data;
			console.log($rootScope.home);
		}).error(function(data, status, headers, config){
			console.log("Error comes");
		});
	} 
});

