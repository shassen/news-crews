
module.exports = {

  // Middleware function to show error message if error occurs.
  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  // Middleware function to show error message if error occurs.
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  // Middleware function to show all comments
  showComments(req, res) {
    res.render('comment/comment', {
      group: res.locals.group,
    });
  },

  // Middleware function that displays comment form for user input.
  showCommForm(req, res) {
    res.render('comment/comment');
  },

  // Middleware function to handle comment post.
  handleComCreate(req, res) {
    res.redirect('comment/comment');
  },

  // Middleware function to show all users for testing.
  showUser(req, res) {
    res.render('user/user', {
      user: res.locals.users,
    });
  },

  // Middleware function that shows all groups for users to enter.
  showGroups(req, res) {
    res.render('group/group', {
      group: res.locals.group,
    });
  },

  // Middleware function that displays group form for user input.
  showAddGroupForm(req, res) {
    res.redirect('group/group');
  },

  // Middleware function that displays group form for user to edit a group.
  showEditGroupForm(req, res) {
    res.render('group/group_edit');
  },

  // Middleware function to delete a group from the db.
  handleGroupDelete(req, res) {
    res.redirect('/groups');
  },

  // Middleware function to handle editing of a group by a user.
  handleGroupUpdate(req, res) {
    res.redirect('/groups');
  },
};
