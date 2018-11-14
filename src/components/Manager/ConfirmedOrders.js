import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ManagerNav from './ManagerNav'
import OrdersNav from './OrdersNav'
import ConfirmedOrder from './ConfirmedOrder'
import { connect } from 'react-redux' 

class ConfirmedOrders extends Component {

	getConfirmedOrders() {
		return this.props.confirmed_orders.map(o => {
			return <ConfirmedOrder key={o.id} order={o} />
		})
	}

	render() {
		return (
			<Container textAlign='left'>
				<ManagerNav history={this.props.history} />
				<OrdersNav history={this.props.history} />
				{this.getConfirmedOrders()}
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
	confirmed_orders: state.manager.confirmed_orders
})

export default connect(mapStateToProps)(ConfirmedOrders)