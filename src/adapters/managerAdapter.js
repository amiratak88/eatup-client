import { API_ROOT, HEADERS } from '../constants/index'

export const login = (data) => {
	return fetch(`${API_ROOT}/managers/login`, {
		method: 'POST',
		headers: HEADERS,
		body: JSON.stringify({ manager: data })
	})
		.then(res => res.ok || !res.json().error ? res.json() : null)
		.catch(res => null)
}

export const persist = (token) => {
	return fetch(`${API_ROOT}/managers/persist`, {
		method: 'GET',
		headers: {"Authorization": token}
	})
		.then(res => res.json())
}

export const confirmOrderAdpater = (id) => {
	return fetch(`${API_ROOT}/orders/${id}`, {
		method: 'PATCH',
		headers: HEADERS,
		body: JSON.stringify({status: "confirmed"})
	})
		.then(res => res.json())
}