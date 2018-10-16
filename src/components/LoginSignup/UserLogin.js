import React from 'react'
import { Container } from 'semantic-ui-react'
import './styles/UserLogin.css'

export default props => (
	<Container className="loginsignup userlogin">
		<br />
		<h1>Log In</h1><br />

		<label htmlFor="username">Username: </label>
		<input id="username" type="text" /><br /><br />

		<label htmlFor="password">Password: </label>
		<input id="password" type="password" /><br /><br />

		<input type="submit" value="Log in"/><br /><br />

		<p>Don't have and account? <a href="#">Signup</a></p>
		<p><a href="#">Log in in as a restaurant manager</a></p>
	</Container>
)