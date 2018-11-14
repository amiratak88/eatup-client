import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { phoneNumberFormatter, addressFormatter } from '../../helpers'

export default ({ user: { first_name, last_name, addresses, phone_number } }) => (
	<Item.Group fluid>
		<Item>
			<Item.Image size='tiny' src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/user-male-icon.png' />

			<Item.Content>
				<Item.Header as='a'>{first_name + last_name}</Item.Header>
				<Item.Description>
					<p><b>Tel:</b> {phoneNumberFormatter(phone_number)}</p>
					<p><b>Address:</b> {addressFormatter(addresses[0])}</p>
				</Item.Description>
			</Item.Content>
		</Item>
	</Item.Group>
)