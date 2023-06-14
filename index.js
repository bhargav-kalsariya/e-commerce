// Import module and Require module

const express = require("express");
const dbconnect = require("./config/dbconnect");
const Route = require("./routers/Route");
const ejs = require("ejs");
const { initializePassword } = require("./middleware/passportlocal");
const Passport = require("passport");
const Session = require("express-session");
const app = express();
const flash = require('connect-flash');
require("dotenv").config();

// Module use for access modules

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views' + __dirname + 'views')
app.use(express.urlencoded({ extended: true }));
dbconnect();
initializePassword(Passport)
app.use(Session({ secret: 'passport' }))
app.use(Passport.initialize())
app.use(Passport.session())
app.use(flash())

// app routes

app.use("/", Route);

// listening port

app.listen(process.env.PORT || 3000, () => {
  console.log("listening on port " + process.env.PORT);
});
