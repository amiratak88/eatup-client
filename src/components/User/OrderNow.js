import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import SearchBar from './SearchBar'
import RestaurantCard from './RestaurantCard'
import Order from './Order'
import { connect } from 'react-redux'
import UserNav from './UserNav'
import { getUserData } from '../../actions/userActions'

class OrderNow extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')
		this.props.getUserData(token)
	}

	getRestaurantCards() {
		return this.props.user.searchedRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} />)
	}

	render() {
		// console.log("OrderNow props", this.props.user)
		return (
			<Container>
				<UserNav history={this.props.history}/>
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

const mapStateToProps = (state) =>({
	user: state.user,
	selectedRestaurantId: state.selectedRestaurantId
})

export default connect(mapStateToProps, { getUserData })(OrderNow)