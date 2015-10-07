"use strict";

var ContrastControl = React.createClass({

	getInitialState: function () {
		return {contrastLevel: 1};
	},

	componentDidMount: function () {
	},

	adjustContrast: function () { 
		(function setCss(index, self) {
			var numLevels = 5;
			$('body').addClass('contrast' + index);
			for (var i = 1; i <= numLevels; i++) {
				if (i != index) {
					$('body').removeClass('contrast' + i);
				}
			}
			if (numLevels == index) {
				self.setState({contrastLevel: 1});
			} else {
				self.setState({contrastLevel: self.state.contrastLevel + 1});
			}
		})(this.state.contrastLevel, this)
	},

	render: function () {
		return (
			<span>
				Level: {this.state.contrastLevel}
				<a href="#" onClick={this.adjustContrast}>adjust contrast</a>
			</span>
		);
	}
});

module.exports = ContrastControl;
