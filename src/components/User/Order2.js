import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import FoodItem from './FoodItem'
import { connect } from 'react-redux';
import userReducer from '../../reducers/userReducer';

class Order2 extends Component {
	state = {
		open: true
	}

	// handleClose = () => this.setState({ open: false })

	getFoodItems = () => {

		const { selectedRestaurantId, searchedRestaurants, currentOrder } = this.props

		const selectedRestaurant = searchedRestaurants.find(r => r.id === selectedRestaurantId)
		const itemIdsInBag = currentOrder.order_items.map(orderItem => orderItem.item.id)

		const itemsInBag = selectedRestaurant.items.filter(i => {
			return itemIdsInBag.includes(i.id)
		})
		return itemsInBag.map(i => {
			return <FoodItem item={i} key={i.id} currentOrder={this.props.currentOrder} />
		})
	}

	render() {
		console.log("Order2 PROPS", this.props)
		return (
			<Modal
				open={this.state.open}
				size='small'
			>
				<Header content='Step 2' />
				<Modal.Content>
					<Header as='h2' content='Review your bag'></Header>
					{this.getFoodItems()}
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button color='green' onClick={this.props.nextStep} inverted>
							Proceed to Checkout <Icon name='right chevron' />
						</Button>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.user.currentOrder,
	selectedRestaurantId: state.user.selectedRestaurantId,
	searchedRestaurants: state.user.searchedRestaurants
})

export default connect(mapStateToProps)(Order2)