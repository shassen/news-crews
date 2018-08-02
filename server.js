// Require necessary packages for project
const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


// Require routers and controllers here




// Create PORT variable to check for env or 3000 as default
const PORT = process.env.PORT || 3000;

// Initialize express
const app = express();

// Allow express to use static assets and style with css in public
app.use(express.static('public'));

// Set the view engine, initialize ejs and join paths for alternative OS
app.set('view engine', 'ejs');
app(path.join(__dirname, 'views'));

// Configure passport 
require('./config/passport');

// Initialize logger and env
app.use(logger('dev'));

// Set up session below



// Initialize Flash
app.use(flash());

// Initialize body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TESTING LOGIN HACK HERE


// Set up ROUTES here

app.get('/', (req, res) => {
    res.send('Testing server...');
})


// Set up listern on port provided or default 3000
app.listen(PORT, () => {
    console.log(`Server is up and listening on port ${PORT} in ${app.use('env')} mode`);
})
