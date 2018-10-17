import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Order1 from './Order1'
import Order2 from './Order2'
import Order3 from './Order3'

export default class Order extends Component {
	state = {
		step: 1
	}

	renderStep() {
		switch (this.state.step) {
			case 1:
				return <Order1 />
			case 2:
				return <Order2 />
			case 3:
				return <Order3 />
		}
	}

	nextStep = () => {
		this.setState({step: this.state.step + 1})
	}

	render() {
		return (
			<Container>
				{this.renderStep()}
			</Container>
		)
	}
}