import React from 'react';
import {connect} from 'react-redux';


class Layout extends React.Component {
	constructor(props, dispatch) {
		super(props, dispatch);
	}
	render() {

		return (
			<div>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

export default connect(mapStateToProps)(Layout);
