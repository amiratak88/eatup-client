import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import UserNav from './UserNav'
import OrderNow from './OrderNow'
import { connect } from 'react-redux'
import { getUserData } from '../../actions/userActions'
import { Redirect } from 'react-router-dom'

class UserDashboard extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')
		this.props.getUserData(token)
	}

	render() {
		// console.log("UserDashboard props", this.props.user)
			return (
				<Container>
					<UserNav />
					<OrderNow />
				</Container>
			)
	}
}

export default connect(({ user }) => ({ user }), { getUserData })(UserDashboard)