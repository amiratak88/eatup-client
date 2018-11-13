import { persist } from '../adapters/managerAdapter'

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