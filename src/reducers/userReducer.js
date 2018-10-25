const initialState = {
	searchedRestaurants: [],
	user: {}
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
		default:
			return initialState
	}
}