import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import ConfirmedOrder from './ConfirmedOrder'

export default class ConfirmedOrders extends Component {
	render() {
		return (
			<Container textAlign='left'>
				<ConfirmedOrder />
				<ConfirmedOrder />
				<ConfirmedOrder />
				<ConfirmedOrder />
				<ConfirmedOrder />
			</Container>
		)
	}
}
