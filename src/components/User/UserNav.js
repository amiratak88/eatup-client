import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class UserNav extends Component {
	state = {
		activeItem: 'Order Now'
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	logout = () => {
		localStorage.clear()
	}

	render() {
			const { activeItem } = this.state

			return (
				<Menu tabular>
					<Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
					<Menu.Item name='Order Now' active={activeItem === 'Order Now'} onClick={this.handleItemClick} />
					<Menu.Item name='My Orders' active={activeItem === 'My Orders'} onClick={this.handleItemClick} />
					<Menu.Item name='Favorite Restaurants' active={activeItem === 'Favorite Restaurants'} onClick={this.handleItemClick} />
					<Button
						color='red'
						content='Log out'
						onClick={this.logout}
					/>
				</Menu>
			)
		
	}
}