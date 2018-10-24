import React from 'react'
import { Redirect } from 'react-router-dom'

export default (Component) => {
	console.log("in wijthAuth")
	return localStorage.getItem('token') ? <Component /> : <Redirect to='/users/login'/>
}