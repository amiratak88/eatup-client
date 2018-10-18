import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ManagerNav extends Component {
	state = { activeItem: 'Orders' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu tabular>
				<Menu.Item name='Orders' active={activeItem === 'Orders'} onClick={this.handleItemClick} />
			</Menu>
		)
	}
}