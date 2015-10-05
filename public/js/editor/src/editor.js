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
	poll: 100
};


var Editor = React.createClass({

	getInitialState: function () {
		return {
			contents: this.props.initialcontent,
			isLoadingContents: true,
			isInitialPageLoad: true,
			editor: null
		};
	},


	loadContents: function (evt) {
		//http://localhost:3000/editorload/56106cfe0568e0da041af51d

	},

	componentDidMount: function () {
		this.loadContents();
		var editor = new Quill('#editor-container', quillConfig);
		this.state.editor = editor;
		editor.focus();
		//editor.setContents(this.state.contents);
	},

	saveContents: function (evt) {
		var contents = this.state.editor.getContents().content;
		console.log("contents = " + contents);
		
		//superagent.post('/editor/456')
		//	.send({contents: contents})
		//	.end(function (err, res) {
		//		console.log(res.body);
		//	}) 
	},

	render: function () {
		return (
			<div id="editor-wrapper">
				<EditorToolbar onSave={this.saveContents}/>
				<div id="editor-container"></div>
			</div>
		);
	}
});

var EditorToolbar = React.createClass({


	render: function () {
		return (
			<div id="formatting-container" className="clearfix">
				<div id="editor-left">
					<select title="Font" className="ql-font">
						<option value="sans-serif" selected="">Sans Serif</option>
						<option value="serif">Serif</option>
						<option value="monospace">Monospace</option>
					</select>
					<span className="ql-format-separator"></span>
					<select className="ql-size">
						<option value="10px">Small</option>
						<option value="13px" selected>Normal</option>
						<option value="18px">Large</option>
						<option value="32px">Huge</option>
					</select>
					<span className="ql-format-separator"></span>
					<select title="Text Color" className="ql-color">
						<option value="rgb(0, 0, 0)" label="rgb(0, 0, 0)" selected=""></option>
						<option value="rgb(230, 0, 0)" label="rgb(230, 0, 0)"></option>
						<option value="rgb(255, 153, 0)" label="rgb(255, 153, 0)"></option>
						<option value="rgb(255, 255, 0)" label="rgb(255, 255, 0)"></option>
						<option value="rgb(0, 138, 0)" label="rgb(0, 138, 0)"></option>
						<option value="rgb(0, 102, 204)" label="rgb(0, 102, 204)"></option>
						<option value="rgb(153, 51, 255)" label="rgb(153, 51, 255)"></option>
						<option value="rgb(255, 255, 255)" label="rgb(255, 255, 255)"></option>
						<option value="rgb(250, 204, 204)" label="rgb(250, 204, 204)"></option>
						<option value="rgb(255, 235, 204)" label="rgb(255, 235, 204)"></option>
						<option value="rgb(255, 255, 204)" label="rgb(255, 255, 204)"></option>
						<option value="rgb(204, 232, 204)" label="rgb(204, 232, 204)"></option>
						<option value="rgb(204, 224, 245)" label="rgb(204, 224, 245)"></option>
						<option value="rgb(235, 214, 255)" label="rgb(235, 214, 255)"></option>
						<option value="rgb(187, 187, 187)" label="rgb(187, 187, 187)"></option>
						<option value="rgb(240, 102, 102)" label="rgb(240, 102, 102)"></option>
						<option value="rgb(255, 194, 102)" label="rgb(255, 194, 102)"></option>
						<option value="rgb(255, 255, 102)" label="rgb(255, 255, 102)"></option>
						<option value="rgb(102, 185, 102)" label="rgb(102, 185, 102)"></option>
						<option value="rgb(102, 163, 224)" label="rgb(102, 163, 224)"></option>
						<option value="rgb(194, 133, 255)" label="rgb(194, 133, 255)"></option>
						<option value="rgb(136, 136, 136)" label="rgb(136, 136, 136)"></option>
						<option value="rgb(161, 0, 0)" label="rgb(161, 0, 0)"></option>
						<option value="rgb(178, 107, 0)" label="rgb(178, 107, 0)"></option>
						<option value="rgb(178, 178, 0)" label="rgb(178, 178, 0)"></option>
						<option value="rgb(0, 97, 0)" label="rgb(0, 97, 0)"></option>
						<option value="rgb(0, 71, 178)" label="rgb(0, 71, 178)"></option>
						<option value="rgb(107, 36, 178)" label="rgb(107, 36, 178)"></option>
						<option value="rgb(68, 68, 68)" label="rgb(68, 68, 68)"></option>
						<option value="rgb(92, 0, 0)" label="rgb(92, 0, 0)"></option>
						<option value="rgb(102, 61, 0)" label="rgb(102, 61, 0)"></option>
						<option value="rgb(102, 102, 0)" label="rgb(102, 102, 0)"></option>
						<option value="rgb(0, 55, 0)" label="rgb(0, 55, 0)"></option>
						<option value="rgb(0, 41, 102)" label="rgb(0, 41, 102)"></option>
						<option value="rgb(61, 20, 102)" label="rgb(61, 20, 102)"></option>
					</select>
					<span className="ql-format-separator"></span>
					<span title="Bold" className="ql-format-button ql-bold"></span>
					<span className="ql-format-separator"></span>
					<span title="Italic" className="ql-format-button ql-italic"></span>
					<span className="ql-format-separator"></span>
					<span title="Underline" className="ql-format-button ql-underline"></span>
					<span className="ql-format-separator"></span>
					<span title="Strikethrough" className="ql-format-button ql-strike"></span>
				</div>
				<div id="editor-right"><a onClick={this.props.onSave} href="#" id="save">Save</a> | <a href="#"
																									   id="close">Close</a>
				</div>
			</div>
		);
	}
});

React.render(
	<Editor/>,
	document.getElementById('editor')
);
