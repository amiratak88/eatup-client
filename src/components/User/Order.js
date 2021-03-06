import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Order1 from './Order1'
import Order2 from './Order2'
import Order3 from './Order3'
import Order4 from './Order4'
import { connect } from 'react-redux'
import { initializeOrder } from '../../actions/userActions'

class Order extends Component {
	state = {
		step: 1
	}

	componentDidMount() {
		this.props.initializeOrder({ restaurant_id: this.props.selectedRestaurantId})
	}

	renderStep() {
		switch (this.state.step) {
			case 1:
				return <Order1 nextStep={this.nextStep} />
			case 2:
				return <Order2 nextStep={this.nextStep} />
			case 3:
				return <Order3 nextStep={this.nextStep} />
			case 4:
				return <Order4 />
		}
	}

	nextStep = () => {
		this.setState({
			step:
				this.state.step === 1 ? 2 : 4
		})
	}

	render() {
		return (
			<Container>
				{this.renderStep()}
			</Container>
		)
	}
}

const mapStateToProps = ({ user: { selectedRestaurantId } }) => ({
	selectedRestaurantId
})

export default connect(mapStateToProps, { initializeOrder })(Order)