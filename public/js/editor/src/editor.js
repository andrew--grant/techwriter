"use strict";
var Quill = require('quill');
var EditorToolbar = require('./editor-toolbar.js');
var superagent = require('superagent');
var NotificationSystem = require('react-notification-system');

// todo: editor alternatives
// http://alloyeditor.com/
// http://summernote.org/

// todo: further research: 
// http://www.advancedfictionwriting.com/articles/snowflake-method/
// http://www.advancedfictionwriting.com/product/snowflake-pro-software/

// todo: autosaving
// https://github.com/share/ShareJS
// http://operational-transformation.github.io/ot-for-javascript.html


var Editor = React.createClass({

	getInitialState: function () {
		return {
			contents: null,
			chapterid: null,
			isLoadingContents: true,
			isInitialPageLoad: true,
			editor: null
		};
	},

	componentDidMount: function () {
		var editor = new Quill('#quill', {
			modules: {
				'toolbar': {container: '#formatting-container'}
			},
			theme: 'snow',
			poll: 200
		});
		this.state.editor = editor;
		this.loadContents();
		this._notificationSystem = this.refs.notificationSystem;
	},

	loadContents: function (evt) {
		var self = this;
		var chapterid = location.search.split('=')[1];
		if (chapterid) {
			this.state.chapterid = chapterid;
			superagent.get('/editorload/?chapterid=' + chapterid)
				.end(function (err, res) {
					if (err) {
						console.log("error");
						console.log(err);
					} else {
						var status = res.body.status;
						if (status == "success") {
							console.log(res.body.content);
							self.state.editor.setContents(JSON.parse(res.body.content));
						} else {
							console.log("status: " + status);
						}
					}
				});
		} else {
			// new document 
			self.state.editor.focus();
		}
	},

	saveContents: function (evt) {
		// todo: local saves offline??
		var self = this;
		var contents = this.state.editor.getContents();
		console.log(JSON.stringify(this.state.editor.getContents()));
		superagent.post('/editorsave/?chapterid=' + this.state.chapterid).
			send({contents: contents})
			.end(function (err, res) {
				if (err) {
					console.log("error");
					console.log(err);
					self.unsuccesfullSaveNotification();
				} else {
					console.log("success");
					self.succesfullSaveNotification();
				}
			});
	},

	closeEditor: function () {
		// todo: snapshot save / warnings etc
		location.href = "/";

	},

	succesfullSaveNotification: function () {
		this._notificationSystem.addNotification({
			message: 'Your Work has been Saved',
			level: 'info',
			position: 'br'
		});
	},

	unsuccesfullSaveNotification: function () {
		this._notificationSystem.addNotification({
			message: 'Your Work could not be Saved',
			level: 'error',
			position: 'br',
			autoDismiss: 0
		});
	},

	render: function () {

		return ( 
			<div id="editor-wrapper">

				<div id='editor-toolbar'>
					<EditorToolbar onSave={this.saveContents} onClose={this.closeEditor}/>
				</div>

				<div id="editor">
					<div id="quill"></div>
				</div>

				<NotificationSystem ref="notificationSystem"/>
				 
			</div>  
		);

	}


});

React.render(
	<Editor/>,
	document.getElementById('editorMount')
); 
