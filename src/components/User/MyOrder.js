import React, { Component } from 'react'
import { Item, Button } from 'semantic-ui-react'

class myOrder extends Component {
	render() {
		return (
			<Item.Group fluid>
				{/* <Confirmation /> */}
				<Item>
					<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

					<Item.Content>
						<Item.Header as='a'>Amirata Khodaparast</Item.Header>
						<Item.Description>
							<p>5 items</p>
							<p>Received 2 minutes ago</p>
						</Item.Description>
						<Item.Extra>

						</Item.Extra>
					</Item.Content>
					<Button
						positive
						icon='check'
						content='Confirm'
					/>
				</Item>
			</Item.Group>
		)
	}
}

export default myOrder
