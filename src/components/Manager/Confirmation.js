import React, { Component } from 'react'
import { Button, Header, Modal, Container, Input } from 'semantic-ui-react'
import User from './User'
import Receipt from './Receipt'


export default class Confirmation extends Component {
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
					<Header textAlign='center' content='Pickup Order' />
				<Modal.Content>
					<Container textAlign='center'>
						Received on 1/1/2018 at 4:30 pm
					</Container>
					<User />
					<Receipt />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Header as='h3'>Ready in?</Header>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='0 - 10 mins'
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='10 - 15 mins'
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='15 - 30 mins'
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='30 - 45 mins'
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='over 45 mins'
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}