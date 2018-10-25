import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { defaultImgURL } from '../../constants/index'
import { selectRestaurant } from '../../actions/userActions'
import { connect } from 'react-redux'

const RestaurantCard = ({ restaurant: { id, name, imgURL, description, address }, selectRestaurant }) => (
	<Item.Group>
		<Item>
			<Item.Image size='small' src={imgURL ? imgURL : defaultImgURL} />

			<Item.Content>
				<Item.Header as='a'>{name}</Item.Header>
				<Item.Meta>
					<span className='cinema'>{address.line1}, {address.city}, {address.state} {address.zipcode}</span>
				</Item.Meta>
				<Item.Description>{description}</Item.Description>
				<Item.Extra>
				<Button
					primary
					floated='right'
					content='Order Now'
					onClick={() =>  selectRestaurant(id)}
				/>
				</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
)

export default connect(null, { selectRestaurant })(RestaurantCard)