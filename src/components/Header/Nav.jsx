import React from 'react';
import {Link} from 'react-router-dom';
import Row from 'components/common/layout/row';
import Column from 'components/common/layout/column';

class Nav extends React.Component {
	render() {
		return (
			<nav className="col">
				<Row>
					<Column><Link to="/About">About</Link></Column>
					<Column><Link to="/Portfolio">Portfolio</Link></Column>
					<Column><Link to="/Contact">Contact</Link></Column>
					<Column><Link to="/Utilities/Styleguide">Styleguide</Link></Column>
				</Row>
			</nav>
		)
	}
};

export default Nav;
