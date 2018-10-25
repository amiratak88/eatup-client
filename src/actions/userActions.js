import { API_ROOT, HEADERS } from '../constants/index'
import { persist, searchRestaurantsAdapter } from '../adapters/userAdapter'

export const getUserData = (token) => {
	return (dispatch) => {
		dispatch({ type: 'START_GETTING_USER_DATA' })
		return persist(token)
			.then(userData => {
				dispatch({
					type: 'GET_USER_DATA',
					payload: {userData}
				})
			})
	}
}

export const searchRestaurants = (term) => {
	return (dispatch) => {
		dispatch({ type: 'START_SEARCHING_RESTAURANTS' })
		return searchRestaurantsAdapter(term)
			.then(restaurants => dispatch({
				type: 'SEARCH_RESTAURANTS',
				payload: {
					restaurants
				}
			}))
	}
}