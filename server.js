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
const authRouter    = require('./routes/auth');
const groupRouter   = require('./routes/group');
const commentRouter = require('./routes/comments');
const userRouter    = require('./routes/user');
// const articleRouter = require('./routes/articles');


// Create PORT variable to check for env or 3000 as default
const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();



// Set the view engine, initialize ejs and join paths for alternative OS
app.set('view engine', 'ejs');

// Allow express to use static assets and style with css in public
app.use(express.static('public'));

// Configure passport
require('./config/passport');

// Initialize logger and env
app.use(logger('dev'));

// Set up session below
app.use(session({
  secret: 'newscrews-secret',
  resave: false,
  saveUninitialized: false,
}));


// Initialize Flash
app.use(flash());

// Initialize body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// TESTING LOGIN HACK HERE
app.use(passport.initialize());

// Set up ROUTES here

app.use('/newscrews', userRouter);
app.use('/auth', authRouter);
// app.use('/groups', groupRouter);
// app.use('/comments', commentRouter);


app.get('/', (req, res) => {
  res.send('Testing server...');
});


// Set up listern on port provided or default 3000
app.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT} in ${app.get('env')} mode`);
});
