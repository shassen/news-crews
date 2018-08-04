
module.exports = {

  showAll(req, res) {
    res.format({
      html() {
        res.render('groups/groups_index');
      },

      json() {
        res.json(res.locals.data);
      },

    });
  },

};
