import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import { searchRestaurants } from '../../actions/userActions'
import { connect } from 'react-redux'

class SearchBar extends Component {

	state = {
		term: ''
	}

	handleChange = e => this.setState({term: e.target.value})

	handleSubmit = e => {
		e.preventDefault()
		this.props.searchRestaurants(this.state.term)
		this.setState({term: ''})
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Input
					fluid
					icon='search'
					value={this.state.term}
					onChange={this.handleChange}
					placeholder='Search restaurants by name...'
				/>
			</Form>
		)
	}
}

export default connect(null, { searchRestaurants })(SearchBar)
