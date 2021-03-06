const initialState = {
	searchedRestaurants: [],
	currentOrder: {order_items: []},
	orders: [],
	selectedRestaurantId: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_USER_DATA':
			return {
				...state,
				...action.payload.userData
			}
		case 'SEARCH_RESTAURANTS':
			return {
				...state,
				searchedRestaurants: action.payload.restaurants
			}
		case 'INITIALIZE_ORDER':
			return {
				...state,
				// orders: [...state.orders, action.payload.order],
				currentOrder: action.payload.order
			}
		case 'ADD_ITEM':
			return {
				...state,
				currentOrder: {
					...state.currentOrder,
					order_items: [
						...state.currentOrder.order_items,
						action.payload.orderItem
					]
				}
			}
		case 'SELECT_RESTAURANT':
			return {
				...state,
				selectedRestaurantId: action.payload.id
			}
		case 'REMOVE_ITEM':
			const orderItems = state.currentOrder.order_items
			let idxToBeRemoved
			for (let i = 0; i < orderItems.length; i++) {
				if (orderItems[i].id === action.payload.orderItem.id) {
					idxToBeRemoved = i
					break
				} else {
					return state
				}
			}
			return {
				...state,
				currentOrder: {
					...state.currentOrder,
					order_items: 
						state.currentOrder.order_items.slice(0, idxToBeRemoved)
						.concat(state.currentOrder.order_items.slice(idxToBeRemoved + 1))
				}
			}
		case 'FINALIZE_ORDER':
			return {
				...state,
				orders: [
					{
						...state.currentOrder,
						status: "finalized"
					},
					...state.orders
				],
				currentOrder: {...initialState.currentOrder}
			}
		case 'UPDATE_RECEIVED_ORDER':
			const targetOrder = state.orders.find(o => o.id === action.payload.id)
			const targetOrderIndex = state.orders.indexOf(targetOrder)
			return {
				...state,
				orders: [
					...state.orders.slice(0, targetOrderIndex),
					action.payload,
					...state.orders.slice(targetOrderIndex + 1)
				]
			}
		default:
			return {
				...initialState,
				...state
			}
	}
}