import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react'
import UserLogin from './components/LoginSignup/UserLogin'

class App extends Component {


	render() {
		return (
			<Container className="App">
				<UserLogin />
			</Container>
		)
	}
}

export default App;
