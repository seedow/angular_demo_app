
var module = angular.module('demo_app');

module.controller('movieController', function($scope, omdb,$location) {

	$scope.movies = [];

	$scope.foundMoviesCount = function(){
	 return	$scope.movies.length
	}

	$scope.searchMovie = function(movie) {
		omdb.getMovie(movie)
			.then(function(movies) {
				$scope.movies = movies;
			})
	}

	$scope.redirectTo = function(route){
		$location.path('/'+route);
	}

	$scope.movie = "hot"
	$scope.searchMovie($scope.movie);
})