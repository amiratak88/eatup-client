import React, { Component } from 'react'
import { Button, Header, Modal, Container } from 'semantic-ui-react'
import User from './User'
import Receipt from './Receipt'


export default class View extends Component {

	render() {
		const {
			order: {
				user,
				order_items
			}
		} = this.props

		return (
			<Modal
				open={this.props.showView}
				size='small'
			>
				<Header textAlign='center' content='Pickup Order' />
				<Modal.Content>
					<Container textAlign='center'>
						<p>Received on 1/1/2018 at 4:30 pm</p>
						<p>Promised by 1/1/2018 at 4:30 pm</p>
					</Container>
					<User user={user} />
					<Receipt order_items={order_items} />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Button
							positive
							content='OK'
							icon='check'
							onClick={this.props.toggleView}
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