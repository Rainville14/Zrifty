import React from 'react';
import ReactDOM from 'react-dom';
import UserName from 'components/User/UserName';
import ProductImage from 'components/Product/Image';

import 'gridly/dist/gridly.min';
import 'styles/global.scss';

ReactDOM.render(
	<React.Fragment>
		<div className="row">
			<UserName />
		</div>
		<div className="row">
			<ProductImage />
		</div>
	</React.Fragment>,
	document.getElementById('app')
);
