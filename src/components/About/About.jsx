import React from 'react';
import {connect} from 'react-redux'
import Row from 'components/common/layout/row';

class About extends React.Component {
	render() {
		const {
			siteName
		} = this.props;

		return (
			<Row>
				{`This is ${siteName}`}
			</Row>
		)
	}
};

const mapStateToProps = (state) => ({
	siteName: state.config.formattedSite
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(About);
