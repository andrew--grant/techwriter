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
					<ul className="nav nav-tabs">
						<li className="active"><a data-toggle="tab" href="#tabChapters">Chapters</a></li>
						<li><a data-toggle="tab" href="#tabLocations">Locations</a></li>
						<li><a data-toggle="tab" href="#tabCharacters">Characters</a></li>
					</ul>
				</div>
				<div className="tab-content">
					<div id="tabChapters" className="tab-pane fade in active">
						<h3>Chapters</h3>

						<div className="chapter-preview-thumb">Chapter</div>
						<div className="chapter-preview-thumb">Chapter</div>
						<div className="chapter-preview-thumb">Chapter</div>
						<div className="chapter-preview-thumb">Chapter</div>
						<div className="chapter-preview-thumb">Chapter</div>
					</div>
					<div id="tabLocations" className="tab-pane fade">
						<h3>Locations</h3>

						<div className="location-preview-thumb">Location</div>
						<div className="location-preview-thumb">Location</div>
						<div className="location-preview-thumb">Location</div>

					</div>
					<div id="tabCharacters" className="tab-pane fade">
						<h3>Characters</h3>

						<div className="character-preview-thumb">Characters</div>
						<div className="character-preview-thumb">Characters</div>
						<div className="character-preview-thumb">Characters</div>
						<div className="character-preview-thumb">Characters</div>
					</div>
				</div>

			</div>
		);
	}
});

React.render(
	<Assets/>,
	document.getElementById('assetsMount')
); 
