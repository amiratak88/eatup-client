import React from 'react'
import { List } from 'semantic-ui-react'

const ReceiptItem = ({ name, price, qty }) => {
	return (
		<List.Item>
			<List.Content floated='right'>
				${price * qty}
			</List.Content>
			{/* image */}
			<List.Content>{qty} x {name}</List.Content>
		</List.Item>
	)
}

export default ReceiptItem