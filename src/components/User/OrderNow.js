import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'
import Order from './Order'

class OrderNow extends Component {
	render() {
		return (
			<Container>
				<Order />
				<Header as='h1'>Select your restaurant</Header>
				<SearchBar /><br />
				<Container textAlign='left'>
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
					<RestaurantCard />
				</Container>
			</Container>
		)
	}
}

export default OrderNow
