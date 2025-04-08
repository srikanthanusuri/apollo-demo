const { ApolloServer, gql } = require('apollo-server');

const MoviesAPI = require('./datasources/movies');

const typeDefs = gql`
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

const resolvers = {
    Query: {
        movies: (parent, args, {dataSources}, info) => dataSources.moviesAPI.getMovies(),
        movieById: (parent, {_id}, {dataSources}, info) => dataSources.moviesAPI.getMovieById(_id),
    }
}

const dataSources = () => ({
    moviesAPI: new MoviesAPI(),
})
        
const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.listen({port: process.env.PORT || 3000})
    .then(({url}) => console.log(`graphQL server started on port ${url}`));