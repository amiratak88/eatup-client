export const phoneNumberFormatter = (num) => {
	const numS = num.toString()
	return `(${numS.slice(0, 3)}) ${numS.slice(3, 6)} - ${numS.slice(6)}`
}