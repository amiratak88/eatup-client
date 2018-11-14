import { persist, confirmOrderAdpater } from '../adapters/managerAdapter'

export const getManagerData = (token) => {
	return (dispatch) => {
		dispatch({ type: 'START_GETTING_MANAGER_DATA' })
		return persist(token)
			.then(data => {
				return dispatch({
					type: 'GET_MANAGER_DATA',
					payload: {...data}
				})
			})
	}
}

export const confirmOrder = (id) => {
	return (dispatch) => {
		dispatch({ type: 'START_CONFIRMING_ORDER' })
		return confirmOrderAdpater(id)
			.then(order => {
				return dispatch({
					type: 'CONFIRM_ORDER',
					payload: order
				})
			})
	}
}