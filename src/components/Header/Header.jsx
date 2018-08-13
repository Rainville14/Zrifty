import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'components/Header/Nav';

class Header extends React.Component {
	render() {
		return (
			<header className="row">
				<div className="header--inner">
					<Link to="/" className="col logo">
						RainSplat
					</Link>
					<Nav />
				</div>
			</header>
		)
	}
};

export default Header;
