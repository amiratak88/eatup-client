import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'
import Order from './Order'
import { connect } from 'react-redux'

class OrderNow extends Component {

	getRestaurantCards() {
		return this.props.user.searchedRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} />)
	}

	render() {
		console.log("OrderNow props", this.props.user)
		return (
			<Container>
				{this.props.user.selectedRestaurantId && <Order />}
				<Header as='h1'>Select your restaurant</Header>
				<SearchBar /><br />
				<Container textAlign='left'>
					{this.getRestaurantCards()}
				</Container>
			</Container>
		)
	}
}

export default connect(({ user, selectedRestaurantId }) => ({ user, selectedRestaurantId }))(OrderNow)