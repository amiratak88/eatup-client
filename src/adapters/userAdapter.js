import { API_ROOT, HEADERS } from '../constants/index'

export const login = (data) => {
	return fetch(`${API_ROOT}/users/login`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify({ user: data })
	})
		.then(res => res.ok || !res.json().error ? res.json() : null)
		.catch(res => null)
}

export const persist = (token) => {
	return fetch(`${API_ROOT}/users/persist`, {
		method: 'GET',
		headers: {"Authorization": token}
	})
		.then(res => res.json())
}

export const searchRestaurantsAdapter = (term) => {
	return fetch(`${API_ROOT}/restaurants/search?term=${term}`)
		.then(res => res.json())
}