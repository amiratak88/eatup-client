import React, { Component } from 'react'
import { Container, Header, Form, Button, Checkbox, Input } from 'semantic-ui-react'

export default class UserLogin extends Component {

	state = {
		username: '',
		password: ''
	}

	handleChange = e => this.setState({[e.target.name]: e.target.value})

	handleSubmit = () => {}

	render() {
		return (
			<Container textAlign='center' style={{width: '35%'}}>
				<Header as='h1'>Log in as a user</Header>
				<Form>
					<Form.Field>
						<label htmlFor='username'>Username</label>
						<Input name = 'username' placeholder='Please enter your username' />
					</Form.Field>
					<Form.Field>
						<label htmlFor='password'>Password</label>
						<Input name = 'password' type='password' placeholder='Please enter your password' />
					</Form.Field>
					<Button type='submit'>Log in</Button>
				</Form>
			</Container>
		)
	}
}