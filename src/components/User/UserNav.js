import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ActionCable } from 'react-actioncable-provider'
import { updateReceivedOrder } from '../../actions/userActions'
import { connect } from 'react-redux'

class UserNav extends Component {
	state = {
		activeItem: ''
	}

	componentDidMount() {
		// console.log('UserNav props', this.props)
		const pathName = this.props.history.location.pathname
		this.setState({activeItem: pathName.slice(7)})
	}

	logout = () => {
		localStorage.clear()
		this.props.history.push('/users/login')
	}

	handleReceived = (data) => {
		this.props.updateReceivedOrder(JSON.parse(data))
	}

	render() {
			const { activeItem } = this.state

			return (
				<Menu tabular>
					<Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} />
					<Link to='/users/order_now'><Menu.Item name='order_now' active={activeItem === 'order_now'} /></Link>
					<Link to='/users/my_orders'><Menu.Item name='my_orders' active={activeItem === 'my_orders'} /></Link>
					<Menu.Item name='Favorite Restaurants' active={activeItem === 'Favorite Restaurants'} />
					<Button
						color='red'
						content='Log out'
						onClick={this.logout}
					/>
					<ActionCable
						channel={{ channel: 'UsersChannel', user: localStorage.getItem('token') }}
						onReceived={this.handleReceived}
					/>
				</Menu>
			)
	}
}

export default connect(null, { updateReceivedOrder })(UserNav)