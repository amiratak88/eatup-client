import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { ActionCable } from 'react-actioncable-provider'
import { addReceivedOrder } from '../../actions/managerActions'
import { connect } from 'react-redux'

class ManagerNav extends Component {
	state = { activeItem: 'Orders' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	logout = () => {
		localStorage.clear()
		this.props.history.push('/managers/login')
	}

	handleReceived = (order) => {
		this.props.addReceivedOrder(JSON.parse(order))
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu tabular>
				<Menu.Item name='Orders' active={activeItem === 'Orders'} onClick={this.handleItemClick} />
				<Button
					color='red'
					content='Log out'
					onClick={this.logout}
				/>
				<ActionCable 
					channel={{channel: 'ManagersChannel', manager: localStorage.getItem('token')}}
					onReceived={this.handleReceived}
				/>
			</Menu>
		)
	}
}

export default connect(null, { addReceivedOrder })(ManagerNav)