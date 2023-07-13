const mongoose = require('mongoose');

const signupModel = new mongoose.Schema({

    firstname: {

        type: String,
        required: true

    },

    lastname: {

        type: String,
        required: true

    },

    username: {

        type: String,
        required: true

    },

    password: {

        type: String,
        required: true

    },

    cart: Array

});

const SignupModel = mongoose.model('user', signupModel);

module.exports = SignupModel;