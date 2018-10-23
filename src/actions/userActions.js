import { API_ROOT, HEADERS } from '../constants/index'
import { persist } from '../adapters/userAdapter'

export const getUserData = (token) => {
	return (dispatch) => {
		dispatch({ type: 'START_GETTING_USER_DATA' })
		return fetch(`${API_ROOT}/persist`, {
			method: 'POST',
			headers: HEADERS,
			body: JSON.stringify(data)
		})
			.then(res => res.json())
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
		return fetch(`${API_ROOT}/restaurants/search/${term}`)
			.then(res => res.json())
			.then(restaurants => dispatch({
				type: 'SEARCH_RESTAURANTS',
				payload: {
					restaurants
				}
			}))
	}
}