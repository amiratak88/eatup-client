import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ManagerNav from './ManagerNav'
import Orders from './Orders'

class ManagerDashboard extends Component {
	render() {
		return (
			<Container>
				<ManagerNav />
				<Orders />
			</Container>
		)
	}
}

export default ManagerDashboard