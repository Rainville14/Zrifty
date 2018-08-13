import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header/Header';
import Row from 'components/common/layout/row';


class Layout extends React.Component {
	constructor(props, dispatch) {
		super(props, dispatch);
	}
	render() {

		return (
			<React.Fragment>
				<Header />
				<main>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(Layout);
