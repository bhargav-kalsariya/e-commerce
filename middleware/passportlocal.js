const SignupModel = require('../models/singupSchema');
const LocalStategy = require('passport-local').Strategy;

exports.initializePassword = (Passport) => {
    Passport.use(new LocalStategy(async (username, password, done) => {
        try {
            let user = await SignupModel.findOne({ username });
            if (!user) {
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user);
        } catch (error) {
            console.log(error);
        }
    }));
    Passport.serializeUser((user, done) => {
        done(null, user.id);
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