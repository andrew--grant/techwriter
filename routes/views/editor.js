var keystone = require('keystone');
var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var chapterid = req.query.chapterid;
	var Chapter = keystone.list('Chapter');

	Chapter.model.findById(chapterid, function (err, doc) {
		locals.content = JSON.stringify(doc.content) ; // todo: streaming parse?? 
		locals.section = 'editor';
		view.render('editor', {layout: null});
	});
}; 
