const API = 'http://localhost:3000/'
const HEADERS = {
	"Content-Type": "application/json",
	"Accepts": "application/json"
}

export class userAdapter {
	static login(data) {
		return fetch(API + 'users/login', {
			method: "POST",
			headers: HEADERS,
			body: JSON.stringify({user: data})
		})
		.then(res => res.json())
	}
}