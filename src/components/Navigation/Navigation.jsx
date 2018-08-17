import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export class Navigation extends Component {
	render() {
		return (
			<nav>
			</nav>
		)
	}
};

Navigation.propTypes = {
};

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
