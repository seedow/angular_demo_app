
var module = angular.module('demo_app');

module.controller('genreController', function($scope, omdb,$location) {

	$scope.genres = [];
	$scope.movies = [];


	$scope.foundMoviesCount = function(){
	 return	$scope.movies.length
	}

	$scope.getListOfGenres = function() {
		omdb.getListOfGenres()
			.then(function(genres) {
				$scope.genres = genres;
			})
	}

	$scope.getMoviesInGenre = function(genreID) {
		omdb.getMoviesInGenre(genreID)
			.then(function(movies) {
				$scope.movies = movies;
			})
	}

	$scope.redirectTo = function(route){
		$location.path('/'+route);
	}
	
	$scope.getListOfGenres();
})