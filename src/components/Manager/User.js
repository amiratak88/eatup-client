import React from 'react'
import { Button, Item } from 'semantic-ui-react'

export default () => (
	<Item.Group fluid>
		<Item>
			<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

			<Item.Content>
				<Item.Header as='a'>Amirata Khodaparast</Item.Header>
				<Item.Description>
					<p><b>Tel:</b> (347) 123 - 4567</p>
					<p><b>Address:</b> 123 Water Street, NewYork, NY 12345</p>
				</Item.Description>
			</Item.Content>
		</Item>
	</Item.Group>
)