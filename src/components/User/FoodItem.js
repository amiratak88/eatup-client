import React, { Component } from 'react'
import { Container, Item, Button } from 'semantic-ui-react'
import { defaultImgURL } from '../../constants/index'

class FoodItem extends Component {
	render() {
		const { item: { imgURL, name, price, description } } = this.props
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
								<Button color='red' icon='minus' size='mini' inverted/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span>0</span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<Button color='green' icon='plus' size='mini' inverted/>
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

export default FoodItem