const initialState = {
	new_orders: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_MANAGER_DATA':
			return {...action.payload}
		default:
			return state
	}
}