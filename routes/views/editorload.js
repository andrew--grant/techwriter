"use strict";

var keystone = require('keystone');
var editorDataSource = require('./../dbapi/editorDataSource.js');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	let chapterid = req.params.id ? req.params.id : 0;
	if (chapterid) {
		var dataSource = editorDataSource();
		var data = dataSource.getChapterByID("56106cfe0568e0da041af51d",//todo - not hardcoded!
			function (err, doc) {
				if (!err) {
					locals.data = {
						content: doc.content,
						title: doc.title, 
						id: doc._id
					};
					view.render('editor', {layout: null});
				} else {
					view.render('editor', {layout: null});
				}
			});
	}
};
