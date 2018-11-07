import React, { Component } from 'react'
import { Container, Item, Button } from 'semantic-ui-react'
import { defaultImgURL } from '../../constants/index'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../actions/userActions'

class FoodItem extends Component {

	add = () => {
		this.props.addItem({
			item_id: this.props.item.id,
			order_id: this.props.currentOrder.id
		})
	}

	remove = () => {
		this.props.removeItem({
			item_id: this.props.item.id,
			order_id: this.props.currentOrder.id
		})
	}

	count() {
		const { item: { id }, currentOrder } = this.props


		if (currentOrder) {
			return currentOrder.order_items.filter(orderItem => {
				return orderItem ? orderItem.item.id === id : false
			}).length
		} else {
			return 0
		}
	}

	render() {
		const { item: { imgURL, name, price, description }, currentOrder, selectedRestaurantId } = this.props
		return (
			<Container>
				<Item.Group>
					<Item>
						<Container>
							<Item.Image
								size='small'
								src={imgURL ? imgURL : defaultImgURL }
							/>
							<div>
								<br />
								<Button
									color='red'
									icon='minus'
									size='mini'
									inverted
									onClick={this.remove}
								/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span>{this.count()}</span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<Button
									color='green'
									icon='plus'
									size='mini'
									inverted
									onClick={this.add}
								/>
							</div>
						</Container>

					<Item.Content>
						<Item.Header as='a'>{name}</Item.Header>
						<Item.Meta>
							<span className='cinema'>${price}</span>
						</Item.Meta>
						<Item.Description>
							<Container>
								{description}
							</Container>
						</Item.Description>
						<Item.Extra>
						</Item.Extra>
					</Item.Content>
				</Item>
				</Item.Group>
				<br />
			</Container>
		)
	}
}

const mapStateToprops = ({ user: { selectedRestaurantId, currentOrder } }) => ({
	selectedRestaurantId,
	currentOrder
})

export default connect(null, { addItem, removeItem })(FoodItem)