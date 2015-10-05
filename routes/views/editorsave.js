"use strict";
var keystone = require('keystone');

exports = module.exports = function (req, res) {
	let id = req.param('id');
	let content = req.body.contents;

	console.log(id);

	var keystone = require('keystone'),
		Chapter = keystone.list('Chapter');


	var newChapter = new Chapter.model({
		title: 'New Chapter',
		content: JSON.stringify(content)
	});

	newChapter.save(function (err) {
		if (err) {
			console.log("err = " + err);
			return;
		}
		console.log('post has been saved');
	});

	res.json({'saved': true});
};
