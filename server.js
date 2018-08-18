// Require necessary packages for project
require('dotenv').config();
const path           = require('path');
const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const passport       = require('passport');
const session        = require('express-session');
const flash          = require('connect-flash');

// Require routers and controllers here
const authRouter     = require('./routes/auth');
const groupRouter    = require('./routes/group');
const commentRouter  = require('./routes/comments');
const userRouter     = require('./routes/user');

// Create PORT variable to check for env or 3000 as default
const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();

// Set the view engine, initialize ejs and join paths for alternative OS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Allow express to use static assets and style with css in public
app.use(express.static('public'));

// Configure passport
require('./config/passport');

// Initialize logger and env
app.use(logger('dev'));

// Set up session below
app.use(session({
  secret:            'newscrews-secret',
  resave:            false,
  saveUninitialized: false,
}));

// Initialize flash for error messages upon login
app.use(flash());

// Initialize body-parser and method override for html methods PUT and DELETE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Initialize passport to allow user logins and remember session.
app.use(passport.initialize());
app.use(passport.session());

// Newscrews routes.
app.use('/auth', authRouter);
app.use('/newscrews', userRouter);
app.use('/groups', groupRouter);
app.use('/comments', commentRouter);

// Set up listener on port provided or default 3000 in some env mode.
app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT} in ${app.get('env')} mode`);
});

module.exports = app;
