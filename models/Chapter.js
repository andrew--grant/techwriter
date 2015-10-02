var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Chapter Model
 * ==================
 */

var Chapter = new keystone.List('Chapter', {});

Chapter.add({
	title: {type: String, required: true, initial: true},
	content: {type: String, required: true, initial: true}
});

//Chapter.relationship({ ref: 'Novel', path: 'chapters' });

Chapter.register();
