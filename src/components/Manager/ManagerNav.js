import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { ActionCable } from 'react-actioncable-provider'

export default class ManagerNav extends Component {
	state = { activeItem: 'Orders' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	logout = () => {
		localStorage.clear()
		this.props.history.push('/managers/login')
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
					onReceived={data => console.log("ACTIONCABLE", data)}
				/>
			</Menu>
		)
	}
}