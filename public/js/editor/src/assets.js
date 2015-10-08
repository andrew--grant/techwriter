"use strict";
var superagent = require('superagent');

var AssetHeader = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<div className='new-asset'>
				<div className='new-asset-title'>{this.props.title}</div>
				<div className='new-asset-create'>New</div>
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
				description: 'Young man, acts old, slightly psychopathic.'
			},
			{
				name: 'Bill Watts',
				description: 'Old man, acts young, mentally well balanced.'
			}
		];
	},


	render: function () {
		return (
			<div>
				<div id="asset-header">
					<ul className="nav nav-tabs">
						<li className="active"><a data-toggle="tab" href="#tabChapters"><span
							className="glyphicon glyphicon-book"></span></a></li>
						<li><a data-toggle="tab" href="#tabLocations"><span
							className="glyphicon glyphicon-globe"></span></a></li>
						<li><a data-toggle="tab" href="#tabCharacters"><span
							className="glyphicon glyphicon glyphicon-pawn"></span></a></li>
					</ul>
				</div>
				<div className="tab-content">
					<div id="tabChapters" className="tab-pane fade in active">
						<AssetHeader title='Chapters'/>
						{this.getChapters().map(function (i) {
							return <div className='chapter-preview-thumb'>{i.chapteName}</div>;
						})}
					</div>
					<div id="tabLocations" className="tab-pane fade">
						<AssetHeader title='Locations'/>
						{this.getLocations().map(function (i) {
							return <div className='location-preview-thumb'>{i.location}</div>;
						})}
					</div>
					<div id="tabCharacters" className="tab-pane fade">
						<AssetHeader title='Characters'/>
						{this.getCharacters().map(function (i) {
							return <div className='character-preview-thumb'>{i.name}</div>;
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
