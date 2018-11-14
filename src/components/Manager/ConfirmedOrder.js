import React,{ Component } from 'react'
import { Button, Item } from 'semantic-ui-react'
import View from './View'

class ConfirmedOrder extends Component {

	state = {
		showView: false
	}

	toggleView = () => this.setState({ showView: !this.state.showView})

	render() {
		const {
			order: {
				user: { first_name, last_name },
				order_items
			}
		} = this.props

		return (
			<Item.Group fluid>
				{this.state.showView && <View />}
				<Item>
					<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

					<Item.Content>
						<Item.Header as='a'>
							{first_name + " " + last_name}
						</Item.Header>
						<Item.Description>
							<p>{order_items.length} items</p>
							<p>Received 2 minutes ago</p>
							<p>Promised by 4:30 pm - 4:45 pm</p>
						</Item.Description>
					</Item.Content>
					<Button
						positive
						icon='check'
						content='Ready for Pickup'
					/>
					<Button
						primary
						icon='eye'
						content='View'
						onClick={this.toggleView}
					/>
					<Button
						color='pink'
						icon='print'
						content='Reprint'
					/>
				</Item>
			</Item.Group>
		)
	}
}

export default ConfirmedOrder