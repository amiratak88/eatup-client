import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import NewOrder from './NewOrder'
import ManagerNav from './ManagerNav'
import OrdersNav from './OrdersNav'
import { getManagerData } from '../../actions/managerActions'
import { connect } from 'react-redux';

class NewOrders extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')
		if (token) {
			this.props.getManagerData(token)
		} else {
			this.props.history.push('/managers/login')
		}
	}

	getNewOrders() {
		return this.props.new_orders.map(order => {
			return <NewOrder key={order.id} order={order} />
		})
	}
	
	render() {
		// console.log("NewOrders PROPS", this.props)
		return (
			<Container textAlign='left'>
				<ManagerNav history={this.props.history} />
				<OrdersNav history={this.props.history} />
				{this.getNewOrders()}
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
	new_orders: state.manager.new_orders
})

export default connect(mapStateToProps, { getManagerData })(NewOrders)