// Import module and Require module

const express = require("express");
const dbconnect = require("./config/dbconnect");
const Session = require("express-session");
const flash = require('connect-flash');
let Passport = require("passport");

let Route = require("./routers/Route");
let CategoryRoute = require("./routers/CategoryRoute");
let ProductRoute = require("./routers/ProductRoute");
let { initializePassword } = require("./middleware/passportlocal");

let app = express();

require("ejs");
require("dotenv").config();
dbconnect();
initializePassword(Passport);

// Module use for access modules

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views' + __dirname + 'views');
app.use(express.urlencoded({ extended: true }));

app.use(Session({

  secret: 'passport',
  resave: false,
  saveUninitialized: true

}));

app.use(Passport.initialize());
app.use(Passport.session());
app.use(flash());

// app routes

app.use("/", Route);
app.use('/', CategoryRoute);
app.use('/', ProductRoute);

// listening port

app.listen(process.env.PORT || 3000, () => {

  console.log("listening on port " + process.env.PORT);

});