"use strict";
var superagent = require('superagent');

var Assets = React.createClass({

	getInitialState: function () {
		return {};
	},

	componentDidMount: function () {

	},

	render: function () {
		return (
			<div>
				<div id="asset-header">
					m1 | m2 | m3
				</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
				<div className="chapter-preview-thumb">chapter-preview-thumb</div>
			</div>
		);
	}
});

React.render(
	<Assets/>,
	document.getElementById('assetsMount')
); 
