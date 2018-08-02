const passport = require('passport');
const userDB   = require('../models/user');

function renderLogin(req, res) {
  res.render('auth/login', { errors: req.flash('error') });
}

const handleLogin = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failurFlash: 'invalid username and password',
});

function renderRegister(req, res) {
  res.render('auth/register', { errors: req.flash('error') });
}

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

function handleLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function usersOnly(req, res, next) {
  if (req.user) {
    next();
  } else {
    req.flash('error', 'Login required');
    res.redirect('/auth/login');
  }
}

module.exports = {
  renderLogin,
  handleLogin,
  renderRegister,
  handleRegister,
  handleLogout,
  usersOnly,
};
