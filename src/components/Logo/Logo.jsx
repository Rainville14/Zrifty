import React from 'react';
import {connect} from 'react-redux';

class Logo extends React.Component {
	render() {
		const {
			siteName,
			logoImage
		} = this.props;

		return (
			<div className="logo">
				{logoImage ? (
					<img src={logoImage} border="0" />
				) : (
					siteName	
				)}
			</div>
		)
	}
};

const mapStateToProps = (state, {form}) => {
	return {
		siteName: state.config.formattedSite,
		logoImage: state.config.logoImage
	};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Logo);