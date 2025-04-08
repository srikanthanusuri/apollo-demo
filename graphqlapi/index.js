const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
type Query {
    sessions: [Session]
}
type Session {
    id: ID!,
    title: String,
    description: String,
}
`;
        
const server = new ApolloServer({typeDefs});
server.listen({port: process.env.PORT || 3000})
    .then(({url}) => console.log(`graphQL server started on port ${url}`));