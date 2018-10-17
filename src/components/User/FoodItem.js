import React, { Component } from 'react'
import { Container, Item, Button } from 'semantic-ui-react'

class FoodItem extends Component {
	render() {
		return (
			<Container>
				<Item.Group>
				<Item>
						<Container>
						<Item.Image size='small' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqvo8sceTqPRKBciFaibhsdcZH-46unwOvMsd8GjIgxPKo9-z' />
						<div>
							<br />
							<Button negative icon='minus' size='mini'/>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<span>2</span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Button positive icon='plus' size='mini'/>
						</div>
						</Container>

					<Item.Content>
						<Item.Header as='a'>Rice</Item.Header>
						<Item.Meta>
							<span className='cinema'>$24.00</span>
						</Item.Meta>
						<Item.Description>
							Tempor sint nisi consectetur elit excepteur duis cillum et adipisicing et. Esse culpa ea laboris incididunt nulla. Aliquip nisi dolore cupidatat do veniam tempor velit veniam mollit mollit consequat elit ipsum. Officia ex ut et est velit ea voluptate dolor sunt eiusmod. Elit id esse quis deserunt pariatur consequat laboris duis ea. Nisi enim dolore nisi esse eu deserunt ipsum voluptate Lorem est aute anim. Mollit tempor nostrud reprehenderit consectetur occaecat dolor.
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