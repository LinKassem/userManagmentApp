import React from 'react'
import { Button, Form, Input } from 'formik-semantic-ui'
import FileUpload from './../../CommonComponents/FileUpload'
import { Formik } from 'formik'
import styled from '@emotion/styled'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom'
import { validateFormValues } from './validateFormValues'
import MapField from './../../CommonComponents/MapField'

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
					address: '',
					addressPin: null
				}}
				onSubmit={handleSubmit}
			>
				{({ handleReset }) => (
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
						</Form.Group>
						<MapField label="Address Pin Location" name="addressPin"/>
						<FileUpload label="Upload Avatar" name="avatar" />

						<div className="submit-button-container">
							<Button.Submit primary>Submit</Button.Submit>
						</div>
					</Form.Children>
				)}
			</Form>
		</div>
	)
}

export default styled(AddUserForm)`
  .submit-button-container {
    margin-top: 1em;
    float: right;
  }
`
