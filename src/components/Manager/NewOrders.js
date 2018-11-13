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

export default connect(null, { getManagerData })(NewOrders)