import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import MyOrder from './MyOrder'
import UserNav from './UserNav'
import { connect } from 'react-redux'

class myOrders extends Component {

	getOrders() {
		return this.props.orders.map(order => {
			return <MyOrder key={order.id} order={order} />
		})
	}

	render() {
		console.log("MyOrders PROPS", this.props)
		return (
			<Container>
				<UserNav history={this.props.history}/>
				{this.getOrders()}
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
	orders: state.user.orders
})

export default connect(mapStateToProps)(myOrders)