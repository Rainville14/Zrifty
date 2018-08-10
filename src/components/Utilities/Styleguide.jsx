import React from 'react';
import Column from 'components/common/layout/Column';

class Styleguide extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Column>
					Button
				</Column>
				<Column>
					<button className="btn">Button</button>
				</Column>
			</React.Fragment>
		)
	}
};

export default Styleguide;
