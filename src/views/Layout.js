import React from 'react';
import {connect} from 'react-redux';
import Header from 'components/Header/Header';


class Layout extends React.Component {
	constructor(props, dispatch) {
		super(props, dispatch);
	}
	render() {

		return (
			<React.Fragment>
				<Header />
				<div>
					<div className="container">
						{this.props.children}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(Layout);
