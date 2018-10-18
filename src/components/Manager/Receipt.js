import React, { Component } from 'react'
import { List, Divider } from 'semantic-ui-react'

class Receipt extends Component {
	render() {
		return (
			<List verticalAlign='middle'>
				<List.Item>
					<List.Content floated='right'>
						$10.00
					</List.Content>
					{/* image */}
					<List.Content>1 x Hamburger</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						$36.00
					</List.Content>
					{/* image */}
					<List.Content>3 x Chicken Kebob</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						$4.00
					</List.Content>
					{/* image */}
					<List.Content>2 x Soda Can</List.Content>
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						$11.50
					</List.Content>
					{/* image */}
					<List.Content>
						2 x Double Quarter Pounder with Cheese
					</List.Content>
				</List.Item>
				<Divider />
				<List.Item>
					<List.Content floated='right'>
						Tax: $5.30
					</List.Content>
					{/* image */}
				</List.Item>
				<List.Item>
					<List.Content floated='right'>
						Total: $66.80
					</List.Content>
					{/* image */}
				</List.Item>
			</List>
		)
	}
}

export default Receipt
