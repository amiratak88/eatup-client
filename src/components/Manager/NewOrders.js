import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import NewOrder from './NewOrder'

export default class NewOrders extends Component {
	render() {
		return (
			<Container textAlign='left'>
				<NewOrder />
				<NewOrder />
				<NewOrder />
				<NewOrder />
			</Container>
		)
	}
}


