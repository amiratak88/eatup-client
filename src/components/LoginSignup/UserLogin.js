import React, { Component } from 'react'
import { Container, Header, Form, Button, Input } from 'semantic-ui-react'
import { login } from '../../adapters/userAdapter'
import { getUserData } from '../../actions/userActions'
import { connect } from 'react-redux'

class UserLogin extends Component {

	state = {
		username: '',
		password: ''
	}

	componentDidMount() {
		localStorage.getItem('token') && this.props.history.push('/users/dashboard')
	}
	

	handleChange = e => this.setState({[e.target.name]: e.target.value})

	handleSubmit = () => {
		login(this.state)
			.then(data => {
				localStorage.setItem('token', data.token)
				this.props.getUserData(localStorage.getItem('token'))
			})
	}

	render() {
		return (
			<Container textAlign='center' style={{width: '35%'}}>
				<Header as='h1'>Log in as a user</Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label htmlFor='username'>Username</label>
						<Input
							name = 'username'
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
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

export default connect(mapStateToProps, { getUserData })(UserLogin)