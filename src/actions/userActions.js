const API = 'http://localhost:3000/'

export const searchRestaurants = (term) => {
	return dispatch => {
		dispatch({ type: 'START_SEARCHING_RESTAURANTS' })
		return fetch(API + 'restaurants/search/?' + term)
			.then(res => res.json())
			.then(restaurants => dispatch({
				type: 'SEARCH_RESTAURANTS',
				payload: {
					restaurants
				}
			}))
	}
}