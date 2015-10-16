"use strict";

var AssetsMenu = React.createClass({

	getInitialState: function () {
		return {};
	},

	componentDidMount: function () {
		$(".dropdown-menu a").on("click", function (e) {
			var href = $(e.target).attr('href');
			$(e.target).parent().parent().children().removeClass('active');
			$(href).tab('show');
		});
	},

	itemSelected: function () {

	},

	render: function () {
		return (
			<div id="assets-ddl-menu" className="dropdown">
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
						data-toggle="dropdown">
					Assets
					<span className="caret"></span>
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					<li><a href="#tabChapters" data-toggle="tab">Chapters</a></li>
					<li><a href="#tabLocations" data-toggle="tab">Locations</a></li>
					<li><a href="#tabCharacters" data-toggle="tab">Characters</a></li>
					<li><a href="#tabCurrent" data-toggle="tab">Current</a></li>
				</ul>
			</div>
		);
	}
});


React.render(
	<AssetsMenu/>,
	document.getElementById('assets-menu')
); 
