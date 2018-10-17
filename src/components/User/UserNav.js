import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleTabular extends Component {
	state = { activeItem: 'Order Now' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu tabular>
				<Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
				<Menu.Item name='Order Now' active={activeItem === 'Order Now'} onClick={this.handleItemClick} />
				<Menu.Item name='My Orders' active={activeItem === 'My Orders'} onClick={this.handleItemClick} />
				<Menu.Item name='Favorite Restaurants' active={activeItem === 'Favorite Restaurants'} onClick={this.handleItemClick} />
			</Menu>
		)
	}
}