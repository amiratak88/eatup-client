import { API_ROOT, HEADERS } from '../constants/index'

export const login = (data) => {
	return fetch(`${API_ROOT}/users/login`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify(data)
	})
		.then(res => res.json())
}

export const persist = (token) => {
	return fetch(`${API}/users/persist`, {
		method: 'GET',
		headers: {"Authorization": token}
	})
		.then(res => res.json())
}