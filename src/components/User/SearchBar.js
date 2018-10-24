import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class SearchBar extends Component {

	state = {
		term: ''
	}

	handleChange = e => this.setState({term: e.target.value})

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

export default SearchBar;
