import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Container } from 'semantic-ui-react'
import UserLogin from './components/LoginSignup/UserLogin'
import UserSignup from './components/LoginSignup/UserSignup'
import ManagerLogin from './components/LoginSignup/ManagerLogin'
import ManagerSignup from './components/LoginSignup/ManagerSignup'
import UserDashboard from './components/User/UserDashboard'
import ManagerDashboard from './components/Manager/ManagerDashboard'
import { ActionCable } from 'react-actioncable-provider'
import { Switch, Route, Redirect } from 'react-router-dom'

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
						<Route path='/users/login' render={(routerProps) => <UserLogin {...routerProps} />} />
						<Route path='/users/signup' component={UserSignup} />
						<Route path='/managers/signup' component={ManagerSignup} />
						<Route path='/managers/login' component={ManagerLogin} />
						<Route path='/users/dashboard' render={(routerProps) => <UserDashboard {...routerProps} />} />
						<Route path='/managers/dashboard' component={ManagerDashboard} />
						{/* <ActionCable
							key={2}
							channel={{ channel: 'ManagersChannel', manager: 2 }}
							onReceived={console.log}
						/> */}
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
