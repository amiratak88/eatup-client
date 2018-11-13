import React, { Component } from 'react'
import { Button, Item } from 'semantic-ui-react'
import Confirmation from './Confirmation'

export default class NewOrder extends Component {

	state = {
		showConfirmation: false
	}

	toggleConfirmation = () => {
		this.setState({ showConfirmation: !this.state.showConfirmation})
	}

	render() {
		const {
			order: {
				user: {
					first_name,
					last_name
				},
				order_items
			}
		} = this.props

		return (
			<Item.Group fluid="true">
				{
					this.state.showConfirmation && 
					<Confirmation
						order={this.props.order}
						showConfirmation={this.state.showConfirmation}
						toggleConfirmation={this.toggleConfirmation}
					/>
				}
				<Item>
					<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

					<Item.Content>
						<Item.Header as='a'>{first_name + " " + last_name}</Item.Header>
						<Item.Description>
							<p>{order_items.length} items</p>
							<p>Received 2 minutes ago</p> {/* Substitute with real data */}
						</Item.Description>
						<Item.Extra>

						</Item.Extra>
					</Item.Content>
					<Button
						positive
						icon='check'
						content='Confirm'
						onClick={this.toggleConfirmation}
					/>
				</Item>
			</Item.Group>
		)
	}
}