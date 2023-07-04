const SignupModel = require('../models/singupSchema');
const LocalStategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");

exports.initializePassword = (Passport) => {
    Passport.use(new LocalStategy(async (username, password, done) => {
        try {
            let user = await SignupModel.findOne({ username });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return done(null, false);
            }
            return done(null, user);
        } catch (error) {
            return done(error, false);
        }
    }));

    Passport.serializeUser((user, done) => {
        return done(null, user.id);
    })

    Passport.deserializeUser(async (id, done) => {
        try {
            let user = await SignupModel.findById(id);
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    })
}