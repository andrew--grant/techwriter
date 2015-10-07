"use strict";

var keystone = require('keystone');
var editorDataSource = require('./../dbapi/editorDataSource.js');

exports = module.exports = function (req, res) {
	let chapterid = req.query.chapterid ? req.query.chapterid : 0;
	if (chapterid) {
		var dataSource = editorDataSource();
		var data = dataSource.getChapterByID(chapterid,//todo - not hardcoded!
			function (err, doc) {
				if (!err) {
					res.json({
						status:'success',
						content: doc.content,
						title: doc.title,
						id: doc._id
					});
				} else {
					console.log("no data");
					res.json({status:'no chapter found'});
				}
			});
	}else{
		// no id supplied on incoming query string
		console.log("no id supplied");
		// todo: case of no id supplied? There needs 
		// to be one of no good calling editor load!! 
		res.json({status:'no chapterid supplied'});
	}
};
