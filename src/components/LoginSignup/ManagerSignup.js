import React from 'react'
import { Container } from 'semantic-ui-react'
import './styles/ManagerSignup.css'

export default props => (
	<Container className="loginsignup managersignup">
		<br />
		<h1>Sign up</h1><br />

		<label htmlFor="username">Username: </label>
		<input type="text" /><br /><br />

		<label htmlFor="password">Password: </label>
		<input type="password" /><br /><br />

		<label htmlFor="confirm-password">Confirm Password: </label>
		<input id="confirm-password" type="password" /><br /><br />

		<input type="submit" value="Log in"/><br /><br />

		<p>Already have an account? <a href="#">Log In</a></p>
		<p><a href="#">Sign up as a restaurant manager</a></p>
	</Container>
)