import React, { Component } from 'react'
import { Item, Button } from 'semantic-ui-react'
import { defaultRestaurantImgURL } from '../../constants/index'

class myOrder extends Component {
	render() {
		const numberOfItems = this.props.order.order_items.length
		const plcedAt = "2:05 PM" // this.props.order.placed_at
		const promisedBy = "2:20 PM"
		return (
			<Item.Group fluid='true'>
				{/* <Confirmation /> */}
				<Item>
					<Item.Image size='tiny' src={defaultRestaurantImgURL} />

					<Item.Content>
						<Item.Header as='a'>Restauarnt's name</Item.Header>
						<Item.Description>
							<p>{numberOfItems} items</p>
							<p>Placed at {plcedAt}</p>
							<p>Promised by {promisedBy}</p>
						</Item.Description>
						{/* <Item.Extra>
						</Item.Extra> */}
					</Item.Content>
					<Button
						primary
						icon='eye'
						content='View'
					/>
				</Item>
			</Item.Group>
		)
	}
}

export default myOrder
