const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async index(request, response){
        console.log(request.query);
        return response.json({devs: []});
    }
}