import React from 'react';
import {connect} from 'react-redux';
import Row from 'components/common/layout/row';

class Portfolio extends React.Component {
	render() {
		const {
			siteName
		} = this.props;

		return (
			<Row>
				{`This is the ${siteName} Portfolio`}
			</Row>
		)
	}
};

const mapStateToProps = (state, {form}) => {
	return {
		siteName: state.config.formattedSite
	};
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
