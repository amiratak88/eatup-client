import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Container } from 'semantic-ui-react'
import FoodItem from './FoodItem'
import Receipt from './Receipt'
import { finalizeOrder } from '../../actions/userActions'
import { connect } from 'react-redux'
import Order from './Order';

class Order4 extends Component {
	state = {
		open: true
	}

	handleClick = () => {
		const { finalizeOrder, currentOrder } = this.props

		finalizeOrder(currentOrder.id)
			.then(() => this.setState({ open: false }))
	}

	render() {
		return (
			<Modal
				open={this.state.open}
				size='small'
			>
				<Header content='Final Step' />
				<Modal.Content style={{fontSize: "1.2rem"}}>
					<p>
						Your order was succefully completed and waiting to be
						confirmed.
					</p>
					<p>Thank you for ordering with Eatup</p>
				</Modal.Content>
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
							onClick={this.handleClick}
							inverted
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => ({
	currentOrder: state.user.currentOrder
})

export default connect(mapStateToProps, { finalizeOrder })(Order4)