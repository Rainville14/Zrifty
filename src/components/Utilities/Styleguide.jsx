import React from 'react';
import Column from 'components/common/layout/column';
import Row from 'components/common/layout/row';

class Styleguide extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Row>
					<Column>
						Button
					</Column>
					<Column>
						<button className="btn">Button</button>
					</Column>
				</Row>
				<Row>
					<Column>
						Textbox
					</Column>
					<Column>
						<input type="text" />
					</Column>
				</Row>
				<Row>
					<Column>
						<label htmlFor="styleGuideCheckbox">Checkbox</label>
					</Column>
					<Column>
						<input id="styleGuideCheckbox" type="checkbox" />
					</Column>
				</Row>
				<Row>
					<Column>
						<label htmlFor="styleGuideRadio">Radio</label>
					</Column>
					<Column>
						<input id="styleGuideRadio" type="radio" />
					</Column>
				</Row>
			</React.Fragment>
		)
	}
};

export default Styleguide;
