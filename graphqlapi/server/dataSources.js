const MoviesAPI = require('../datasources/movies');

module.exports = () => ({
    moviesAPI: new MoviesAPI(),
});
