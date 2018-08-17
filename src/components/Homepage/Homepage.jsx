import React from 'react';
import {connect} from 'react-redux';
import Column from 'components/common/layout/column';

class Homepage extends React.Component {
	render() {
		const {
			siteName
		} = this.props;

		return (
			<Column>
				{`This is ${siteName} Homepage`}
			</Column>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
