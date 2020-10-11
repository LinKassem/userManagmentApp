import { validateEmail } from './../../Utils/validateEmail'
import { validatePassword } from './../../Utils/validatePassword'

export const validateFormValues = (values, formikApi) => {
	let errors = 0
	if (!values.firstName) {
		formikApi.setFieldError('firstName', 'First name is required')
		errors++
	}
	if (!values.lastName) {
		formikApi.setFieldError('lastName', 'Last name is required')
		errors++
	}
	if (!values.job) {
		formikApi.setFieldError('job', 'Job is required')
		errors++
	}
	if (!values.email) {
		formikApi.setFieldError('email', 'Email required')
		errors++
	}
	if (values.email && !validateEmail(values.email)) {
		formikApi.setFieldError('email', 'Email is not valid')
		errors++
	}

	if ((values.password && !values.confirmPassword) || !values.confirmPassword) {
		formikApi.setFieldError('confirmPassword', 'Confirming Password is required')
		errors++
	}
	if ((!values.password && values.confirmPassword) || !values.password) {
		formikApi.setFieldError('password', ' Password is required')
		errors++
	}
	if ((values.password && values.confirmPassword) && values.password !== values.confirmPassword) {
		formikApi.setFieldError('confirmPassword', 'Passwords do not match')
		formikApi.setFieldError('password', 'Passwords do not match')
		errors++
	}
	const passwordError = validatePassword(values.password)
	if (passwordError) {
		formikApi.setFieldError('password', passwordError)
		errors++
	}

	if (!values.address) {
		formikApi.setFieldError('address', 'Address is required')
		errors++
	}

	if (!values.addressPin) {
		formikApi.setFieldError('addressPin', 'Address Pin is required')
		errors++
	}

	if (!values.avatar) {
		formikApi.setFieldError('avatar', 'Avatar is required')
		errors++
	}

	return (!(errors > 0))
}
