const { ApolloServer, gql } = require('apollo-server');

const movies = require('./data/movies.json');

const typeDefs = gql`
type Query {
    movies: [Movie]
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
        movies: () => movies,
    }
}
        
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({port: process.env.PORT || 3000})
    .then(({url}) => console.log(`graphQL server started on port ${url}`));