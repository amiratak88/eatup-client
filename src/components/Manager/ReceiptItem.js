import React from 'react'
import { List } from 'semantic-ui-react'

export default ({name, price, qty}) => (
	<List.Item>
		<List.Content floated='right'>${(price * qty).toFixed(2)}</List.Content>
		<List.Content>{qty} x {name}</List.Content>
	</List.Item>
)