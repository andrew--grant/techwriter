"use strict";

// todo: set/read from local cookie
// or set as profile on server for
// cross device support

// todo: control for line and word spacing adjustment


var ContrastControl = React.createClass({

	getInitialState: function () {
		return {contrastLevel: 1};
	},

	componentDidMount: function () {
		var self = this;
		$('.btn-contrast').on('click', function () {
			self.adjustContrast();
			// todo: cookie store
		});

		// todo: make enahnced controls (rename) and add feature 'hide/show assets'
		// .container-header .col-sm-3,.container-main .col-sm-3 {display: none;}
		// .container-header .col-sm-9,.container-main .col-sm-9 {width: 100%;}
		// glyphicon-eye-open / close http://getbootstrap.com/components/

	},

	adjustContrast: function () {
		(function setCss(index, self) {
			var numLevels = 4;
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
//<a href="#" onClick={}></a>
	render: function () {
		return (
			<span title="Contrast" className="btn-contrast glyphicon glyphicon-adjust"></span>
		);
	}
});

module.exports = ContrastControl;
