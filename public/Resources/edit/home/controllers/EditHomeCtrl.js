'use-strict';

var junoonFoundation = angular.module('junoonFoundation');

junoonFoundation.controller('EditHomeCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location){
	$scope.init = function(){
		console.log("I am edit controller");
		$scope.quotesList = [];
		console.log($rootScope.home.quotes);
		for(var key in $rootScope.home.quotes){
			$scope.quotesList[key] = {};
			$scope.quotesList[key].name = $rootScope.home.quotes[key].name;
			$scope.quotesList[key].content = $rootScope.home.quotes[key].content;
			$scope.quotesList[key].isActive = false;
			// console.log(quotes);
		}
		console.log($scope.quotesList);
		console.log(typeof($scope.quotesList));
	}
	$scope.open = function(index, element){
		console.log(index);
		console.log(element);
	}
	$scope.clicked = function(index){
		$scope.quotesList[index].isActive = true;
		console.log($scope.quotesList[index].isActive + "at" + index);
	}
	$scope.submit = function(){
		alert("I got clicked ahhhh");
		var requestObject = [];
		var url = "Resources/JSON/home.json";
		for(var key=0 in $scope.quotesList){
			if($scope.quotesList[key].name !== $rootScope.home.quotes[key].name){
				console.log("They are different");
				requestObject.push($scope.quotesList[key]);
				console.log(requestObject);		
			}else{
				console.log("They are Different");
			}
		}
		$http({
			method : 'POST',
			url	: 'getUrl',
			data : JSON.stringify(requestObject),
			headers : {'Content-Type' : 'application/json'}			
			}).success(function(data, status, headers, config){
				console.log("This is will execute when there is some response");
			}).error(function(data, status, headers, config){
				console.log("Error Comes while editing the stuff");
			});

		// }
		/*$http({
			url : url,
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).success(function(data,status,headers,config){
			$rootScope.home=data;
			console.log($rootScope.home.quotes);
		}).error(function(data, status, headers, config){
			console.log("Error comes");
		})*/
	}
}]);