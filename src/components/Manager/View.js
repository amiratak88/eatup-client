import React, { Component } from 'react'
import { Button, Header, Modal, Container } from 'semantic-ui-react'
import User from './User'
import Receipt from './Receipt'


export default class View extends Component {
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
						<p>Received on 1/1/2018 at 4:30 pm</p>
						<p>Promised by 1/1/2018 at 4:30 pm</p>
					</Container>
					<User />
					<Receipt />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button
							positive
							content='OK'
							icon='check'
						/>
						<Button
							color='pink'
							content='Print'
							icon='print'
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}