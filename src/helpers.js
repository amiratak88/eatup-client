export const phoneNumberFormatter = (num) => {
	const numS = num.toString()
	return `(${numS.slice(0, 3)}) ${numS.slice(3, 6)} - ${numS.slice(6)}`
}

export const addressFormatter = (addressObj) => {
	return `
		${addressObj.line1},
		${addressObj.city},
		${addressObj.state + " " + addressObj.zipcode}
	`
}