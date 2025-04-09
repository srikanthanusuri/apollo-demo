const { ApolloServer } = require('apollo-server');

const { formatError } = require('./util');

const typeDefs = require('./server/schema')
const resolvers = require('./server/resolvers');
const dataSources = require('./server/dataSources');
        
const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources, 
    debug: false,
    formatError,
});
server.listen({port: process.env.PORT || 4000})
    .then(({url}) => console.log(`graphQL server started on port ${url}`));