import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Container } from 'semantic-ui-react'
import UserLogin from './components/LoginSignup/UserLogin'
import UserSignup from './components/LoginSignup/UserSignup'
import ManagerLogin from './components/LoginSignup/ManagerLogin'
import ManagerSignup from './components/LoginSignup/ManagerSignup'
import ManagerDashboard from './components/Manager/ManagerDashboard'
import { Switch, Route } from 'react-router-dom'
import OrderNow from './components/User/OrderNow'
import MyOrders from './components/User/MyOrders'
import NewOrders from './components/Manager/NewOrders'

class App extends Component {

	render() {
		return (
				<Container>
					<Switch>
						{/* <Redirect
							exact
							from='/'
							to='/users/login'
							render={(routerProps) => <UserLogin {...routerProps} />}
						/> */}

						{/* User Routes */}
						<Route path='/users/login' render={(routerProps) => {
							return <UserLogin {...routerProps} />
						}} />

						<Route path='/users/signup' component={UserSignup} />

						<Route path='/users/order_now' render={(routerProps) => {
							return <OrderNow {...routerProps} />}}
						/>

						<Route path='/users/my_orders' render={(routerProps) => {
							return <MyOrders {...routerProps} />}}
						/>

						{/* Manager Routes */}
						<Route path='/managers/signup' component={ManagerSignup} />
						<Route path='/managers/login' component={ManagerLogin} />
						<Route path='/managers/new_orders' render={(routerProps) => {
							return <NewOrders {...routerProps} />
						}} />
					</Switch>
				</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		manager: state.manager,
		user: state.user
	}
}

export default connect(mapStateToProps)(App)
