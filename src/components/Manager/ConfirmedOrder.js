import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import View from './View'

export default () => (
	<Item.Group fluid>
		<View />
		<Item>
			<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

			<Item.Content>
				<Item.Header as='a'>Amirata Khodaparast</Item.Header>
				<Item.Description>
					<p>5 items</p>
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
			/>
			<Button
				color='pink'
				icon='print'
				content='Reprint'
			/>
		</Item>
	</Item.Group>
)