import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {
	applyMiddleware,
	compose,
	createStore,
	combineReducers
} from 'redux';

import {Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer} from 'react-router-redux';

import Base from 'controllers/base';
import Utilities from 'controllers/utilities';

import Layout from 'views/Layout';

const rootReducer = combineReducers({
	form: formReducer,
	routing: routerReducer
});

import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';

import apiMiddleware from 'middleware/apiMiddleware';

import 'gridly/dist/gridly.min';
import 'styles/global.scss';

const Routes = [
	...Base,
	...Utilities
];

const createClientStore = (state, rootReducer, history) => {
	if (!process.env.DEVTOOLS) {
		return createStore(rootReducer, state,
			compose(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history)))
		);
	} else {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		const logger = require('redux-logger');

		return createStore(rootReducer, state,
			composeEnhancers(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history), logger()))
		);
	}
};

const history = createHistory();
// Can inject state in here eventually
const store = createClientStore({}, rootReducer, history);

if (document.getElementById('app')) {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Switch>
					<Layout>
						{Routes.map((route) =>
							<Route
								key={route.path}
								path={route.path}
								component={route.component}
								exact={route.exact}
							/>
						)}
					</Layout>
				</Switch>
			</ConnectedRouter>
		</Provider>, document.getElementById('app')
	);
}
