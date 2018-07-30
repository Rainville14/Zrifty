import APIC from 'constants/ApiConstants';

const apiMiddleware = (store) => (dispatch) => (action) => {
	switch (action.type) {
		case APIC.API_CALL:
			const state = store.getState();
			// add in csrf token

			// if (state.session && state.session.accessToken) {
				// action.payload.accessToken = state.session.accessToken;
			// }

			return fetch(payload.url, params)
			.then(res => {
				response = {
					headers: res.headers,
					status: res.status,
					url: res.url
				};

				if (res.status > 401) {
					// dispatch(triggerModal(MODAL_BACKEND_ERROR.id));
				}
				if (payload) {
					return res.text();
				}
			})
			.then(data => {
				// some endpoints don't return anything
				const resp = data ? JSON.parse(data) : {error: 'Not Found'};

				const errors = objectPath.get(resp, 'errors');

				dispatch({
					type: APIC.API_FETCHED,
					payload: {
						request,
						response,
						data: resp
					}
				});

				if (errors) {
					const type = objectPath.get(errors, '0.type');

					switch (type) {
						case 'CSRFError':
						case 'SessionExpired':
							dispatch({
								type: SC.SESSION_ERROR,
								payload: {
									type,
									error: true
								}
							});
							return;
					}
				}

				payload.success(resp);

				if (isSession) {
					sessionFetched = true;
					runQueue();
				}
			})
			.catch(err => {
				// Hack for detecting if the error is a promise. If not, something failed in our success flow
				// and we should log the error. If it is a promise, it's an API exception response, and we
				// should decode the result and handle appropriately.
				if (err.then) {
					return;
				}
				throw err;
			});
		default:
			return dispatch(action);
	}
};

export default apiMiddleware;
