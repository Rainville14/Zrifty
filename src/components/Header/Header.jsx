import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="row">
				<div className="col logo">
					Zrifty
				</div>
				<nav className="col">
					<ul>
						<li><a href="#">About</a></li>
						<li><a href="#">Browse</a></li>
					</ul>
				</nav>
			</header>
		)
	}
};

export default Header;
