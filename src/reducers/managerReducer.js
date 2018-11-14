const initialState = {
	new_orders: [],
	confirmed_orders: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_MANAGER_DATA':
			return {
				...state,
				...action.payload
			}
		case 'CONFIRM_ORDER':
			const targetOrder = state.new_orders.find(o => o.id === action.payload.id)
			const targetOrderIndex = state.new_orders.indexOf(targetOrder)
			return {
				...state,
				new_orders: state.new_orders.slice(0, targetOrderIndex).concat(state.new_orders.slice(targetOrderIndex + 1)),
				confirmed_orders: [...state.confirmed_orders, action.payload]
			}
		default:
			return state
	}
}