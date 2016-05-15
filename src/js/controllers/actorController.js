
var module = angular.module('demo_app');

module.controller('actorController', function($scope, omdb,$location) {

	$scope.actors = [];

	$scope.foundMoviesCount = function(){
	 return	$scope.movies.length
	}

	$scope.searchActor = function(actor) {
		omdb.getActor(actor)
			.then(function(actors) {
				$scope.actors = actors;
			})
	}

	$scope.redirectTo = function(route){
		$location.path('/'+route);
	}

	$scope.actor = "hot"
	$scope.searchActor($scope.actor);
})