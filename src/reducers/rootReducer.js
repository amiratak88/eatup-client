import { combineReducers } from 'redux'
import userReducer from './userReducer'
import managerReducer from './managerReducer'
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
	router: connectRouter(history),
	user: userReducer,
	manager: managerReducer
})