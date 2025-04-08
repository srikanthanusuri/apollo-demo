const MoviesAPI = require('../datasources/movies');
const JokesAPI = require('../datasources/jokes');

module.exports = () => ({
    moviesAPI: new MoviesAPI(),
    jokesAPI: new JokesAPI(),
});
