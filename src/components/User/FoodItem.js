import React, { Component } from 'react'
import { Container, Item, Button } from 'semantic-ui-react'

class FoodItem extends Component {
	render() {
		return (
			<Container>
				<Item.Group>
				<Item>
					<Item.Image size='small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqvo8sceTqPRKBciFaibhsdcZH-46unwOvMsd8GjIgxPKo9-z' />

					<Item.Content>
						<Item.Header as='a'>Rice</Item.Header>
						<Item.Meta>
							<span className='cinema'>$24.00</span>
						</Item.Meta>
						<Item.Description>
							Tempor sint nisi consectetur elit excepteur duis cillum et adipisicing et. Esse culpa ea laboris incididunt nulla. Aliquip nisi dolore cupidatat do veniam tempor velit veniam mollit mollit consequat elit ipsum. Officia ex ut et est velit ea voluptate dolor sunt eiusmod. Elit id esse quis deserunt pariatur consequat laboris duis ea. Nisi enim dolore nisi esse eu deserunt ipsum voluptate Lorem est aute anim. Mollit tempor nostrud reprehenderit consectetur occaecat dolor.
						</Item.Description>
						<Item.Extra>
						<Button primary floated='left'>
							Order Now
						</Button>
						</Item.Extra>
					</Item.Content>
				</Item>
				</Item.Group>
			</Container>
		)
	}
}

export default FoodItem