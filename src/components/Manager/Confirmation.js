import React, { Component } from 'react'
import { Button, Header, Modal, Container, Input } from 'semantic-ui-react'
import User from './User'
import Receipt from './Receipt'
import { confirmOrder } from '../../actions/managerActions'
import { connect } from 'react-redux'


class Confirmation extends Component {

	confirm = () => {
		this.props.confirmOrder(this.props.order.id)
		this.props.toggleConfirmation()
	}

	render() {
		return (
			<Modal size='small' open={this.props.showConfirmation}>
				<Header textAlign='center' content='Pickup Order' />
				<Modal.Content>
					<Container textAlign='center'>
						Received on 1/1/2018 at 4:30 pm
					</Container>
					<User user={this.props.order.user} />
					<Receipt order_items={this.props.order.order_items} />
				</Modal.Content>
				<Modal.Actions>
					<Container textAlign='center'>
						<Header as='h3'>Ready in?</Header>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='0 - 10 mins'
							onClick={this.confirm}
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='10 - 15 mins'
							onClick={this.confirm}
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='15 - 30 mins'
							onClick={this.confirm}
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='30 - 45 mins'
							onClick={this.confirm}
						/>
						<Button
							primary
							onClick={this.handleClose}
							inverted
							content='over 45 mins'
							onClick={this.confirm}
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default connect(null, { confirmOrder })(Confirmation)