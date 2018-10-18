import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import OrdersNav from './OrdersNav'
import NewOrders from './NewOrders'
import ConfirmedOrders from './ConfirmedOrders'

class Orders extends Component {
	render() {
		return (
			<Container>
				<OrdersNav />
				{/* <NewOrders /> */}
				<ConfirmedOrders />
			</Container>
		)
	}
}

export default Orders;
