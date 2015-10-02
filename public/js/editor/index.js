"use strict";
var Quill = require('quill');
var superagent = require('superagent');

var quillConfig = {
	modules: {
		'toolbar': {container: '#formatting-container'},
		'link-tooltip': true,
		'image-tooltip': true
	},
	theme: 'snow',
	poll: 300
};

var editor = new Quill('#editor-container', quillConfig);
editor.focus();
editor.setContents([
	{insert: 'Chapter N - Title Could Come from Outline of Book', attributes: {size: "18px"}},
	{insert: '\n\n\n'}

]);

$('#save').on("click", function () {
	var contents = editor.getContents();
	superagent.post('/editor/456')
		.send({contents: contents})
		.end(function (err, res) {
			console.log(res.body);
		})
});

$('#close').on("click", function () {
	// todo: do  save, then redirect
	location.href = '/';
});

// todo: build quill component
React.render(
<h1>Hello, world!</h1>,
	document.getElementById('app')
);

