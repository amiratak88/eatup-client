import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import FoodItem from './FoodItem'
import Receipt from './Receipt'

export default class Order4 extends Component {
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
				<Header content='Final Step' />
				<Modal.Content>
					<Header as='h2' content='Order Confirmation'></Header>
					<Receipt />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button
							content='OK'
							icon='check'
							color='green'
							onClick={this.handleClose}
							inverted
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}