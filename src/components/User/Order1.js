import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import FoodItem from './FoodItem'
import { connect } from 'react-redux'
import RestaurantCard from './RestaurantCard';

class Order1 extends Component {
	state = {
		open: true
	}

	handleClose = () => this.setState({ open: false })

	getFoodItems() {
		const selectedRestaurant = this.props.searchedRestaurants.find(r => r.id === this.props.selectedRestaurantId)

		return selectedRestaurant.items.map(i => {
			return <FoodItem item={i} key={i.id} currentOrder={this.props.currentOrder} />
		})
	}

	render() {
		// console.log("Order1 PROPS:", this.props)
		return (
			<Modal
				open={this.state.open}
				size='small'
			>
				<Header content='Step 1' />
				<Modal.Content>
					<Header as='h2' content='Select your items'></Header>
					{this.getFoodItems()}
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button color='green' onClick={this.handleClose} inverted>
							Review your bag <Icon name='right chevron' />
						</Button>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => ({
	searchedRestaurants: state.user.searchedRestaurants,
	selectedRestaurantId: state.user.selectedRestaurantId,
	currentOrder: state.user.currentOrder
})

// export default connect(mapStateToProps, null)(Order1)

export default connect(mapStateToProps)(Order1)