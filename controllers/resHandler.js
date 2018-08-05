
module.exports = {

  // showAll(req, res) {
  //   res.format({
  //     html() {
  //       res.render('', {
  //         name: req.query.name });
  //     },

  //     json() {
  //       res.json(res.locals.data);
  //     },
  //   });
  // },

  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showComments(req, res) {
    res.render('partials/comment', {
      comment: res.locals.comments,
    });
  },

};
