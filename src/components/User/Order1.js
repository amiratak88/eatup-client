import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import FoodItem from './FoodItem'

export default class Order1 extends Component {
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
				<Header content='Step 1' />
				<Modal.Content>
					<Header as='h2' content='Select your items'></Header>
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
				</Modal.Content>
				<Modal.Actions>
					<Button color='green' onClick={this.handleClose} inverted>
						<Icon name='checkmark' /> Got it
					</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}