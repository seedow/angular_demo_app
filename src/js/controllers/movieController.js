
var module = angular.module('demo_app');

module.controller('movieController', function($scope, omdb,$location) {

	$scope.movies = [];
	$scope.movieContainerColumns = 12;
	$scope.movieContainerHeight = "height:580px";
	$scope.error = "";

	$scope.foundMoviesCount = function(){
	 return	$scope.movies.length
	}

	$scope.searchMovie = function(movie) {
		omdb.getMovie(movie)
			.then(function(movies) {
				$scope.movies = movies;
			},function(errorMessage){
				$scope.error = "something went wrong :("
			})
	}

	$scope.redirectTo = function(route){
		$location.path('/'+route);
	}

	// $scope.movie = "hot"
	$scope.searchMovie($scope.movie);
})