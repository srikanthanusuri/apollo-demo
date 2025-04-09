const movies = require('../data/movies.json');
const { v4: uuidv4 } = require('uuid');

const { DataSource } = require('apollo-datasource');

class MoviesAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {
    }

    getMovies() {
        return movies;
    }

    getMovieById(id) {
        return movies.find(({_id}) => _id === id);
    }

    toggleFavoriteSession(id) {
        const movie = movies.find(({_id}) => _id === id);
        movie.favorite = !movie.favorite;
        return movie;
    }

    addMovie(movie) {
        movie._id = uuidv4();
        movies.push(movie);
        return movie;
    }
}

module.exports = MoviesAPI;