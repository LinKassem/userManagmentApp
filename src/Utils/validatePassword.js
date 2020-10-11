export const validatePassword = (pswd) => {
	let re = ''
	if (pswd.length < 8) {
		return 'Password must be atleast 8 characters'
	}

	re = /[A-Z]/
	if (!re.test(pswd)) {
		return 'Password must have atleast 1 capital letter'
	}

	re = /[!@#$%^&*(),.?":{}|<>]/
	if (!re.test(pswd)) {
		return 'Password must have atleast 1 special charachter'
	}
}
