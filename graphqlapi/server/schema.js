const { gql } = require('apollo-server');

module.exports = gql`
type Query {
    movies: [Movie],
    movieById(_id: ID!): Movie,
}
type Movie {
    _id: ID!,
    title: String,
    plot: String,
    fullplot: String,
    genres: [String],
    countries: [String],
}
`;