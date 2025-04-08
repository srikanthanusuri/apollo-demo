const movies = require('../data/movies.json');

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
}

module.exports = MoviesAPI;