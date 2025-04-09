const { gql } = require('apollo-server');

module.exports = gql`
type Query {
    movies: [Movie],
    movieById(_id: ID!): Movie,
    getDadJoke: Joke,
}
type Mutation {
    toggleFavoriteMovie(id: ID): Movie
    addMovie(movie: MovieInput): Movie
}
input MovieInput {
    title: String,
    plot: String,
    fullplot: String,
    genres: [String],
    countries: [String],
    favorite: Boolean,
}
type Movie {
    _id: ID!,
    title: String,
    plot: String,
    fullplot: String,
    genres: [String],
    countries: [String],
    joke: Joke,
    favorite: Boolean,
}
type Joke {
    id: ID!,
    joke: String,
}
`;