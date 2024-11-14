exports.index = function (req, res, next) {
  res.render('index', { data: null }); // Render index with no database data
};
