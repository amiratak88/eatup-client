import React, { Component } from 'react'
import { Modal, Container, Header, Button } from 'semantic-ui-react'
import Receipt from './Receipt'
import uuid from 'uuid'

class OrderView extends Component {

	message() {
		const messagesArr = []
		const resName = this.props.order.restaurant.name
		switch(this.props.order.status) {
			case 'finalized':
				const mes = 'Your order was succefully completed and waiting to be confirmed.'
				messagesArr.push(mes)
				break
			case 'confirmed':
				messagesArr.push(`Your order was successfully confirmed by ${resName}.`)
				messagesArr.push(`It'll be ready by 2:50PM.`)
				break
			default:
		}

		messagesArr.push('Thank you for ordering with Eatup.')

		return messagesArr.map(m => <p key={uuid()}>{m}</p>)
	}

	render() {
		const resName = this.props.order.restaurant.name

		return (
			<Modal
				open={true}
				size='small'
			>
				<Header as='h2' content='Order Details' />
				<Modal.Content style={{fontSize: "1.2rem"}}>
					{this.message()}
				</Modal.Content>
				{/* <Modal.Content>
					<Header content='Items'></Header>
					<Receipt />
				</Modal.Content> */}
				<Modal.Actions>
					<Container textAlign='center'>
						<Button
							content='OK'
							icon='check'
							color='green'
							onClick={this.props.toggleModal}
							inverted
						/>
					</Container>
				</Modal.Actions>
			</Modal>
		)
	}
}

export default OrderView