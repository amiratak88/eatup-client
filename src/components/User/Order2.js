import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import FoodItem from './FoodItem'

export default class Order2 extends Component {
	state = {
		open: true
	}

	handleClose = () => this.setState({ open: false })

	render() {
		return (
			<Modal
				open={this.state.open}
				size='small'
			>
				<Header content='Step 2' />
				<Modal.Content>
					<Header as='h2' content='Review your bag'></Header>
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button color='green' onClick={this.handleClose} inverted>
							Proceed to Checkout <Icon name='right chevron' />
						</Button>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}