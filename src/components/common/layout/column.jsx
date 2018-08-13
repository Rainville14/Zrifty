import React from 'react';

class Column extends React.Component {
	render() {
		const {
			children
		} = this.props;

		return (
			<div className="col">
				{children}
			</div>
		)
	}
};

export default Column;
