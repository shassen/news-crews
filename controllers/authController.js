const passport       = require('passport');
const userDB         = require('../models/user');

// All functions in this file are heavily referenced from @John Master's lecture on Authorization.
// Most functions are identical with the exception of handleLogin where
// I've adjusted the successRedirect.

// Middleware function to load ejs form for user login.
function renderLogin(req, res) {
  res.render('auth/login', { errors: req.flash('error') });
}

// Middleware function to handle the actual login by either redirecting
// to Newscrews or back to the login page if failure occurs.
const handleLogin = passport.authenticate('local', {
  successRedirect: '/groups',
  failureRedirect: '/auth/login',
  failureFlash: 'invalid username and password',
});

// Middleware function to load the registration page
function renderRegister(req, res) {
  res.render('auth/register', { errors: req.flash('error') });
}

// Middleware function to create a new user for Newscrews.
// If the username is already taken, a message will tell the user
// to choose a new UN.
function handleRegister(req, res, next) {
  // Get credentials from req.body
  const { username, password } = req.body;
  // Register new user
  userDB.register(username, password)
    .then((newUser) => {
      req.login(newUser, e => (e ? next(e) : res.redirect('/')));
    })
    .catch((e) => {
      req.flash('error', 'username unavailable');
      res.redirect('/auth/register');
    });
}

// Middleware function to handle user logouts. Not implemented in Newscrews yet.
function handleLogout(req, res) {
  req.logout();
  res.redirect('/');
}

// Middleware function to ensure ONLY users can interact with data. Not used in app.
function usersOnly(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.flash('error', 'Login required');
    res.redirect('/auth/login');
  }
}

// Middleware function to display all users to the browser for testing purposes.
function getAll(req, res, next) {
  userDB.findAll()
    .then((user) => {
      res.locals.users = user;
    })
    .catch(e => next(e));
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
  usersOnly,
  getAll,
};
