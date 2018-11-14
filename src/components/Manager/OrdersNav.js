import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class OrdersNav extends Component {
	state = { activeItem: '' }

	componentDidMount() {
		const pathName = this.props.history.location.pathname
		this.setState({activeItem: pathName.slice(10)})
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu tabular>
				<Link to='/managers/new_orders'>
					<Menu.Item name='New' active={activeItem === 'new_orders'} />
				</Link>
				<Link to='/managers/confirmed_orders'>
					<Menu.Item name='Confirmed' active={activeItem === 'confirmed_orders'} />
				</Link>
			</Menu>
		)
	}
}