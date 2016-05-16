
var module = angular.module('demo_app');

module.controller('actorController', function($scope, omdb,$location) {

	$scope.actors = [];
	$scope.movies = [];
	$scope.error = "";

	
	$scope.searchActor = function(actor) {
		$scope.movies = [];
		omdb.getActor(actor)
			.then(function(actors,error) {
				$scope.actors = actors;
			})
			.error(function(errorMessage){
				$scope.error = errorMessage;
			})

	}

	$scope.redirectTo = function(route){
		$location.path('/'+route);
	}

	// $scope.actor = "hot"
	$scope.searchActor($scope.actor);
})