"use strict";
var superagent = require('superagent');

var AssetHeader = React.createClass({

	getInitialState: function () {
		return {};
	},

	newClicked: function () {

		switch (this.props.title) {

			case 'Chapters' :
				console.log("Chapters");
				break;

			case 'Locations' :
				console.log("Locations");
				break;

			case 'Characters' :
				console.log("Characters");
				break;

		}
	},

	render: function () {
		return (
			<div className='new-asset'>
				<div className='new-asset-title'>{this.props.title}</div>
				<div className='new-asset-create'><a href='#' onClick={this.newClicked}>New</a></div>
			</div>)
	}
});

var Assets = React.createClass({

	getInitialState: function () {
		return {};
	},

	componentDidMount: function () {
	},

	getChapters: function () {
		return [
			{
				chapteName: 'The Return',
				chapterid: '123'
			}, {
				chapteName: 'Of Men and Mice',
				chapterid: '111'
			}, {
				chapteName: 'Donalds Son',
				chapterid: '122'
			}, {
				chapteName: 'Wild Oats and Young Geese',
				chapterid: '323'
			}, {
				chapteName: 'That Way is The Wrong Way',
				chapterid: '333'
			}
		];
	},

	getLocations: function () {
		return [
			{
				location: 'Liverpool, England',
				locationid: '434'
			}, {
				location: 'Derby, England',
				locationid: '645'
			},
			{
				location: 'Castle Rock, Maine',
				locationid: '145'
			}
		];
	},

	getCharacters: function () {
		return [
			{
				name: 'Ted Dansing',
				description: 'Young man, acts old, slightly psychopathic.',
				characterid: '111'
			},
			{
				name: 'Bill Watts',
				description: 'Old man, acts young, mentally well balanced.',
				characterid: '121'
			}
		];
	},

	editClicked: function (id, assetType, evt) {

		evt.preventDefault();
		console.log("id " + id);
		console.log("assetType " + assetType);

		switch (this.props.title) {

			case 'Chapters' :
				console.log("Chapters");
				break;

			case 'Locations' :
				console.log("Locations");
				break;

			case 'Characters' :
				console.log("Characters");
				break;
		}
	},

	render: function () {
		var self = this;
		return (
			<div>
				<div id="asset-header">
					<ul className="nav nav-tabs">
						<li className="active"><a data-toggle="tab" href="#tabChapters" title="Chapters"><span
							className="glyphicon glyphicon-book"></span></a></li>
						<li><a data-toggle="tab" href="#tabLocations"  title="Locations"><span
							className="glyphicon glyphicon-globe"></span></a></li>
						<li><a data-toggle="tab" href="#tabCharacters"  title="Characters"><span
							className="glyphicon glyphicon glyphicon-pawn"></span></a></li>
					</ul>
				</div>
				<div className="tab-content">
					<div id="tabChapters" className="tab-pane fade in active">
						<AssetHeader title='Chapters'/>
						{this.getChapters().map(function (i) {
							return <div className='chapter-preview-thumb' key={i.chapterid}>
								<a href='#'
								   onClick={self.editClicked.bind(self, i.chapterid,'chapter')}>{i.chapteName}</a>
							</div>;
						})}
					</div>
					<div id="tabLocations" className="tab-pane fade">
						<AssetHeader title='Locations'/>
						{    this.getLocations().map(function (i) {
							return <div className='location-preview-thumb' key={i.locationid}>
								<a href='#'
								   onClick={self.editClicked.bind(self, i.locationid,'location')}>{i.location}</a>
							</div>;
						})}
					</div>
					<div id="tabCharacters" className="tab-pane fade">
						<AssetHeader title='Characters'/>
						{this.getCharacters().map(function (i) {
							return <div className='character-preview-thumb' key={i.characterid}>
								<a href='#'
								   onClick={self.editClicked.bind(self, i.characterid,'character')}>{i.name}</a></div>;
						})}
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
