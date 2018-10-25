import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'
import Order from './Order'
import { connect } from 'react-redux'

class OrderNow extends Component {

	state = {
		selectedRestaurantId: null
	}

	getRestaurantCards() {
		return this.props.user.searchedRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} selectRestaurant={this.selectRestaurant}/>)
	}

	selectRestaurant = (id) => this.setState({selectedRestaurantId: id})

	render() {
		// console.log("OrderNow props", this.props.user)
		return (
			<Container>
				{this.state.selectedRestaurantId && <Order />}
				<Header as='h1'>Select your restaurant</Header>
				<SearchBar /><br />
				<Container textAlign='left'>
					{this.getRestaurantCards()}
				</Container>
			</Container>
		)
	}
}

export default connect(({ user }) => ({ user }))(OrderNow)
