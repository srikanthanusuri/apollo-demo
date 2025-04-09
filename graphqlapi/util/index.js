const { ApolloError } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');

module.exports.formatError = (err) => {
    if (err.extensions.code === 'GRAPHQL_VALIDATION_FAILED' && err.message.startsWith('Cannot query field')) {
        return new ApolloError('Cannot query for items not in the schema', "403", {
            requestId: uuidv4(),
        })
    }
    return err;

};