import React from 'react'
import { Button, Form, Input } from 'formik-semantic-ui'
import FileUpload from './../../CommonComponents/FileUpload'
import { Formik } from 'formik'
import styled from '@emotion/styled'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom'

const validateEmail = (email) => {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
		return true
	}
	return false
}

const validatePassword = (pswd) => {
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

const validateFormValues = (values, formikApi) => {
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

	if (!values.avatar) {
		formikApi.setFieldError('avatar', 'Avatar is required')
		errors++
	}

	return (!(errors > 0))
}

const createUser = (values) => {
	const result = axios.post(
		'https://reqres.in/api/users',
		values
	)
		.then(function (response) {
			return response
		})
		.catch(function (error) {
			console.log(error)
			return error
		})

	return result
}

const AddUserForm = ({ className }) => {
	const { addToast } = useToasts()
	const history = useHistory()

	const handleSubmit = async (values, formikApi) => {
		const isValidForm = validateFormValues(values, formikApi)
		formikApi.setSubmitting(isValidForm)
		if (isValidForm) {
			try {
				await createUser(values)
				addToast('User added successfully', { appearance: 'success', autoDismiss: true })
				history.push('/')
			} catch (error) {
				addToast('Failed to add user', { appearance: 'error', autoDismiss: true })
			}
		}
	}

	return (
		<div className={className}>
			<Form
				initialValues={{
					firstName: '',
					lastName: '',
					job: '',
					email: '',
					password: '',
					confirmPassword: '',
					avatar: '',
					address: ''
				}}
				onSubmit={handleSubmit}
				render={({ handleReset }) => (
					<Form.Children>

						<Form.Group widths="2">
							<Input label="First Name" name="firstName" />
							<Input label="Last Name" name="lastName" />
						</Form.Group>

						<Form.Group widths="2">
							<Input label="Job" name="job" />
							<Input label="Email" name="email" />
						</Form.Group>

						<Form.Group widths="2">
							<Input label="Password" name="password" inputProps={{ type: 'password' }}/>
							<Input label="Confirm Password" name="confirmPassword" inputProps={{ type: 'password' }}/>
						</Form.Group>
						<Form.Group widths="2">
							<Input label="Address" name="address" />
							{/* <Input label="Street Address Pin" name="addressPin" /> */}
						</Form.Group>
						<FileUpload label="Upload Avatar" name="avatar" />

						<div className="submit-button-container">
							<Button.Submit primary>Submit</Button.Submit>
						</div>
					</Form.Children>
				)}
			/>
		</div>
	)
}

export default styled(AddUserForm)`
  .submit-button-container {
    margin-top: 1em;
    float: right;
  }
`
