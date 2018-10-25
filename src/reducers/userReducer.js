const initialState = {
	user: {},
	searchedRestaurants: [],
	currentOrder: {order_items: []},
	orders: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_USER_DATA':
			return {
				...state,
				user: action.payload.userData
			}
		case 'SEARCH_RESTAURANTS':
			return {
				...state,
				searchedRestaurants: action.payload.restaurants
			}
		case 'INITIALIZE_ORDER':
			return {
				...state,
				orders: [...state.orders, action.payload.order],
				currentOrder: action.payload.order
			}
		case 'ADD_ITEM':
			return {
				...state,
				currentOrder: {
					...state.currentOrder,
					order_items: [state.currentOrder.items, action.payload.item]
				}
			}
		default:
			return initialState
	}
}