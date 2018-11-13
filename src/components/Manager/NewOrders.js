import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import NewOrder from './NewOrder'
import ManagerNav from './ManagerNav'
import OrdersNav from './OrdersNav'

export default class NewOrders extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')
		if (token) {
			
		} else {
			this.props.history.push('/managers/login')
		}
	}
	
	render() {
		return (
			<Container textAlign='left'>
				<ManagerNav history={this.props.history} />
				<OrdersNav history={this.props.history} />

				<NewOrder />
				<NewOrder />
				<NewOrder />
				<NewOrder />
			</Container>
		)
	}
}


