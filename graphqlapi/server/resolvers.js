module.exports = {
    Query: {
        movies: (parent, args, {dataSources}, info) => dataSources.moviesAPI.getMovies(),
        movieById: (parent, {_id}, {dataSources}, info) => dataSources.moviesAPI.getMovieById(_id),
    }
};
