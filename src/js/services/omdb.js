var omdb = function($http) {

	var getMovie = function(movieName) {
		return $http.get('https://api.themoviedb.org/3/search/movie?api_key=0f47a9ce7df633f38a49de2284fdd6a5&query=' + movieName)
			.then(function(response) {
				return response.data.results.map(function(movie){
					return {
						title:movie.title,
						poster_path:movie.poster_path? "http://image.tmdb.org/t/p/w500"+movie.poster_path: 'http://www.northlandinspections.com/assets/img/Home/Question.png',
						overview:movie.overview,
						release_date:movie.release_date,
						vote_count:movie.vote_count
					}
				})
			})
	}


	return {
		getMovie: getMovie
	};
}

var module = angular.module('demo_app');
module.factory('omdb', omdb)