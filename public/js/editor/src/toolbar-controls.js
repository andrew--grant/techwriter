"use strict";

// todo: set/read from local cookie
// or set as profile on server for
// cross device support

// todo: control for line and word spacing adjustment


var ToolbarControls = React.createClass({

	getInitialState: function () {
		return {
			contrastLevel: 1,
			assetsVisible: true
		};
	},

	componentDidMount: function () {
		var self = this;
		$('.btn-contrast').on('click', function () {
			self.adjustContrast();
			// todo: cookie store
		});

		$('.btn-show-hide-assets').on('click', function () {
			self.showHideAssets();
			// todo: cookie store
		});


	},

	adjustContrast: function () {
		(function setCss(index, self) {
			var numLevels = 3;
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
			if (self.state.contrastLevel == 1) {
				console.log(i);
				$('.btn-contrast')
					.removeClass('btn-active')
					.addClass('btn-inactive');
			} else {
				console.log("else " + i);
				$('.btn-contrast')
					.removeClass('btn-inactive')
					.addClass('btn-active');
			}
		})(this.state.contrastLevel, this)
	},

	showHideAssets: function () {
		console.log(this.state.assetsVisible);
		if (this.state.assetsVisible) {
			$('.container-header .col-sm-3, .container-main .col-sm-3').css('display', 'none');
			$('.container-header .col-sm-9, .container-main .col-sm-9').css('width', '100%');
			this.state.assetsVisible = false;
			$('.btn-show-hide-assets')
				.removeClass('glyphicon-eye-open')
				.addClass('glyphicon-eye-close')
				.removeClass('btn-inactive')
				.addClass('btn-active');
		} else {
			$('.container-header .col-sm-3, .container-main .col-sm-3').css('display', 'block');
			$('.container-header .col-sm-9, .container-main .col-sm-9').css('width', '75%');
			this.state.assetsVisible = true;
			$('.btn-show-hide-assets')
				.removeClass('glyphicon-eye-close')
				.addClass('glyphicon-eye-open')
				.removeClass('btn-active')
				.addClass('.btn-inactive');
		}
	},

	render: function () {
		return (
			<span>
				<span title="Contrast" className="btn-contrast glyphicon glyphicon-adjust"></span>
				<span className="ql-format-separator"></span>
				 <span title="Hide/Show Assets" className="btn-show-hide-assets glyphicon glyphicon-eye-open"></span>
			</span>
		);
	}
});

module.exports = ToolbarControls;
