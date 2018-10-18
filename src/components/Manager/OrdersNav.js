import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class OrdersNav extends Component {
	state = { activeItem: 'New' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu tabular>
				<Menu.Item name='New' active={activeItem === 'New'} onClick={this.handleItemClick} />
				<Menu.Item name='Confirmed' active={activeItem === 'Confirmed'} onClick={this.handleItemClick} />
			</Menu>
		)
	}
}