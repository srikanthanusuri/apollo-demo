const { RESTDataSource } = require('apollo-datasource-rest');
const { ApolloError } = require('apollo-server');
const { v4: uuidv4 } = require('uuid');

class JokesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://icanhazdadjoke.com';
    }

    async getDadJoke() {
        try {
            const data = await this.get('/', { }, { timeout: 5000 });
            return data;
        } catch (e) {
            console.error('Did not get the joke!', e);
            return new ApolloError('Unable to fetch jokes.', '500', {
                requestId: uuidv4(),
            })
        }
    }

    /*
     * Fill in other headers if needed
     */
    willSendRequest(request) {
        request.headers.set('accept', 'application/json');
    }
}

module.exports = JokesAPI;