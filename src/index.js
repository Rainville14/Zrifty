import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'deepmerge';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {
	applyMiddleware,
	compose,
	createStore,
	combineReducers
} from 'redux';
import logger from 'redux-logger';

import {Route, Switch} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer} from 'react-router-redux';

import baseSiteConfig from 'configs/sites/base';

import Base from 'controllers/base';
import Utilities from 'controllers/utilities';

import Layout from 'views/Layout';

import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';

import configReducer from 'reducers/ConfigReducer';

import apiMiddleware from 'middleware/apiMiddleware';

import 'gridly/dist/gridly.min';
import 'styles/global.scss';

const rootReducer = combineReducers({
	form: formReducer,
	routing: routerReducer,
	config: configReducer(baseSiteConfig)
});

console.log('ROOT REDUCER: ' + rootReducer)

const Routes = [
	...Base,
	...Utilities
];

const createClientStore = (state, rootReducer, history) => {
	if (!process.env.DEVTOOLS) {
		return createStore(rootReducer, state, applyMiddleware(logger),
			compose(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history)))
		);
	} else {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
		//const logger = require('redux-logger');

		return createStore(rootReducer, state, applyMiddleware(logger),
			composeEnhancers(applyMiddleware(thunk, apiMiddleware, routerMiddleware(history)))
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
