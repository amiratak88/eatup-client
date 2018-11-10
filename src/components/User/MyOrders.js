import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import MyOrder from './MyOrder'
import UserNav from './UserNav'
import { connect } from 'react-redux'

class myOrders extends Component {

	render() {
		return (
			<Container>
				<UserNav history={this.props.history}/>
				In My Orders
				<MyOrder />
				<MyOrder />
				<MyOrder />
				<MyOrder />
				<MyOrder />
			</Container>
		)
	}
}

export default connect()(myOrders)