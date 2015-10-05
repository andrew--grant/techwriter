"use strict";
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	return {

		getChapterByID: function (chapterid, cb) {
			var Chapter = keystone.list('Chapter');
			Chapter.model.findById(chapterid, function (err, doc) {
				if (err) {
					cb(err, null);
				} else {
					cb(null, doc);
				}
			});
		}
	}

};

 
