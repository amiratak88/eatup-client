import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import Confirmation from './Confirmation'

export default () => (
	<Item.Group fluid>
		<Confirmation />
		<Item>
			<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

			<Item.Content>
				<Item.Header as='a'>Amirata Khodaparast</Item.Header>
				<Item.Description>
					5 items <br />
					Received 2 minutes ago
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