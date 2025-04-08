const { ApolloServer } = require('apollo-server');

const typeDefs = require('./server/schema')
const resolvers = require('./server/resolvers');
const dataSources = require('./server/dataSources');
        
const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server.listen({port: process.env.PORT || 3000})
    .then(({url}) => console.log(`graphQL server started on port ${url}`));