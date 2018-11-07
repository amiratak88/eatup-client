import { API_ROOT, HEADERS } from '../constants/index'
import { persist, searchRestaurantsAdapter, initializeOrderAdapter, addItemAdapter, removeItemAdapter } from '../adapters/userAdapter'

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

export const initializeOrder = (data) => {
	return (dispatch) => {
		dispatch({ type: 'START_INITIALIZING_ORDER' })
		return initializeOrderAdapter(data)
			.then(order => dispatch({
				type: 'INITIALIZE_ORDER',
				payload: { order }
			}))
	}
}

export const addItem = (data) => {
	return (dispatch) => {
		dispatch({ type: 'START_ADDING_ITEM' })
		return addItemAdapter(data)
			.then(orderItem => dispatch({
				type: 'ADD_ITEM',
				payload: { orderItem }
			}))
	}
}

export const selectRestaurant = (id) => ({
	type: 'SELECT_RESTAURANT',
	payload: { id }
})

export const removeItem = (data) => {
	return (dispatch) => {
		dispatch({ type: 'START_REMOVING_ITEM'})
		return removeItemAdapter(data)
			.then(orderItem => dispatch({
				type: 'REMOVE_ITEM',
				payload: { orderItem }
			}))
	}
}