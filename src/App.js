import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import UserLogin from './components/LoginSignup/UserLogin'
import UserSignup from './components/LoginSignup/UserSignup'
import ManagerLogin from './components/LoginSignup/ManagerLogin'
import ManagerSignup from './components/LoginSignup/ManagerSignup'

class App extends Component {


	render() {
		return (
			<Container className="App">
				{/* <UserLogin /> */}
				{/* <UserSignup /> */}
				{/* <ManagerLogin /> */}
				{/* <ManagerSignup /> */}
			</Container>
		)
	}
}

export default App;
