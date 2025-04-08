const { RESTDataSource } = require('apollo-datasource-rest');

class JokesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://icanhazdadjoke.com';
    }

    async getDadJoke() {
        const data = await this.get('/');
        return data;
    }

    /*
     * Fill in other headers if needed
     */
    willSendRequest(request) {
        request.headers.set('accept', 'application/json');
    }
}

module.exports = JokesAPI;