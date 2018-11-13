const initialState = {
	new_orders: [],
	confirmed_orders: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_MANAGER_DATA':
			return {...action.payload}
		case 'CONFIRM_ORDER':
			const new_orders = [...state.new_orders]
			const targetOrder = new_orders.find(o => o.id === action.payload)
			const targetOrderIndex = new_orders.indexOf(targetOrderIndex)
			targetOrder.status = "confirmed"
			return {
				...state,
				new_orders: new_orders.slice(0, targetOrderIndex).concat(new_orders.slice(targetOrderIndex + 1)),
				confirmed_orders: [...state.confirmed_orders, targetOrder]
			}
		default:
			return state
	}
}