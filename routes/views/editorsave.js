"use strict";
var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var chapterid = req.param('chapterid');
	var content = JSON.stringify(req.body.contents);
	var Chapter = keystone.list('Chapter');

	if (chapterid) {
		// its an update
		var existingChapter = Chapter.model
			.findByIdAndUpdate(chapterid, {$set: {content: content}},
			function (err, doc) {
				if (err) return handleError(err);
				res.send({'updated': true});
			});
		
	} else {
		// its an insert 
		var newChapter = new Chapter.model({
			title: 'New Chapter',
			content: content 
		});
		newChapter.save(function (err) {
			if (err) {
				console.log("err = " + err);
				return;
			}
			console.log('post has been saved');
		});
		res.json({'saved': true});
	}


};
