import {combineReducers} from 'redux';

const combineSection = (section) => (state = section, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const buildConfig = (config) => {
	return combineReducers({
		features: combineSection(config.features),
		site: combineSection(config.site),
		settings: combineSection(config.settings),
		formattedSite: combineSection(config.formattedSite)
	});
};

export default buildConfig;
