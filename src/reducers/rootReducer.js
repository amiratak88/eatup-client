import { combineReducers } from 'redux'
import userReducer from './userReducer'
import managerReducer from './managerReducer'

export default combineReducers({
	user: userReducer,
	manager: managerReducer
})