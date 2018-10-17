import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import UserNav from './UserNav'
import OrderNow from './OrderNow'

class UserDashboard extends Component {
	render() {
		return (
			<Container>
				<UserNav />
				<OrderNow />
			</Container>
		)
	}
}

export default UserDashboard
