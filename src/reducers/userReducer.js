const initialState = {
	searchedRestaurants: []
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'GET_USER_DATA':
			return action.payload.userData
		default:
			return initialState
	}
}