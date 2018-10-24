import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import UserNav from './UserNav'
import OrderNow from './OrderNow'
import { connect } from 'react-redux'
import { getUserData } from '../../actions/userActions'
import { Redirect } from 'react-router-dom'

class UserDashboard extends Component {

	componentDidMount() {
		const token = localStorage.getItem('token')

		if (token && token !== "undefined" && !this.props.user.id && !this.props.user.status) {
			this.props.getUserData(token)
		}
	}

	render() {
		if (localStorage.getItem('token')) {
			return (
				<Container>
					<UserNav />
					<OrderNow />
				</Container>
			)
		} else {
			return <Redirect to='/users/login'/>
		}
	}
}

const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps, { getUserData })(UserDashboard)