
module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showComments(req, res) {
    res.render('comment/comment', {
      comment: res.locals.comments,
    });
  },

  showUser(req, res) {
    res.render('user/user', {
      user: res.locals.users,
    });
  },

  showGroups(req, res) {
    res.render('group/group', {
      group: res.locals.group,
    });
  },

  showAddGroupForm(req, res) {
    res.redirect('group/group');
  },

  showEditGroupForm(req, res) {
    res.render('group/group_edit');
  },

  handleGroupDelete(req, res) {
    res.redirect('/groups');
  },

  handleGroupUpdate(req, res) {
    res.redirect('/groups');
  },
};
