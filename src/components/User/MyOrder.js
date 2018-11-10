import React, { Component } from 'react'
import { Item, Button } from 'semantic-ui-react'
import { defaultRestaurantImgURL } from '../../constants/index'
import OrderView from './OrderView'

class myOrder extends Component {

	state = {
		modalOpen: false
	}

	toggleModal = () => {
		this.setState({ modalOpen: !this.state.modalOpen })
	}

	status() {
		const { status } = this.props.order
		switch(status) {
			case 'finalized':
				return <p style={{color: 'blue'}}>Finalized</p>
			case 'confirmed':
				return <p style={{color: 'green'}}>Confirmed</p>
			default:
		}
	}

	render() {
		const numberOfItems = this.props.order.order_items.length
		const plcedAt = "2:05 PM" // this.props.order.placed_at
		const promisedBy = "2:20 PM"
		const resImg = this.props.order.restaurant.imgURL
		const resName = this.props.order.restaurant.name
		return (
			<Item.Group fluid='true'>
				{this.state.modalOpen && <OrderView order={this.props.order} toggleModal={this.toggleModal} />}

				<Item>
					<Item.Image size='tiny' src={resImg ? resImg : defaultRestaurantImgURL} />

					<Item.Content>
						<Item.Header as='a'>{resName}</Item.Header>
						<Item.Description>
							<p>{numberOfItems} items</p>
							<p>Placed at {plcedAt}</p>
							{ this.props.order.status === 'confirmed' && <p>Promised by {promisedBy}</p>}
							{this.status()}
						</Item.Description>
						{/* <Item.Extra>
						</Item.Extra> */}
					</Item.Content>
					<Button
						primary
						icon='eye'
						content='View'
						onClick={this.toggleModal}
					/>
				</Item>
			</Item.Group>
		)
	}
}

export default myOrder
