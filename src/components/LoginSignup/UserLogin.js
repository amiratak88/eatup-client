import React, { Component } from 'react'
import { Container, Header, Form, Button, Input } from 'semantic-ui-react'
import { login } from '../../adapters/userAdapter'
import { Redirect } from 'react-router-dom'
import UserDashboard from '../User/UserDashboard'

const initialState = {
	username: '',
	password: ''
}

class UserLogin extends Component {

	state = initialState

	handleChange = e => this.setState({[e.target.name]: e.target.value})

	handleSubmit = e => {
		e.preventDefault()
		this.setState(initialState)
		login(this.state)
			.then(data => {
				localStorage.setItem('token', data.token)
			})
	}

	render() {
		const token = localStorage.getItem('token')

		if (!token) {
			return (
				<Container textAlign='center' style={{width: '35%'}}>
					<Header as='h1'>Log in as a user</Header>
					<Form onSubmit={this.handleSubmit}>
						<Form.Field>
							<label htmlFor='username'>Username</label>
							<Input
								name = 'username'
								type='text'
								placeholder='Please enter your username'
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Form.Field>
							<label htmlFor='password'>Password</label>
							<Input
								name='password'
								type='password'
								placeholder='Please enter your password'
								onChange={this.handleChange}
							/>
						</Form.Field>
						<Button type='submit'>Log in</Button>
					</Form>
				</Container>
			)
		} else {
			return <Redirect to='/users/dashboard' />
		}
	}
}

export default UserLogin