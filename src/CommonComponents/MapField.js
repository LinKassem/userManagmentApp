import React from 'react'
import { Form } from 'semantic-ui-react'
import { Field } from 'formik'
import styled from '@emotion/styled'
import Map from './../CommonComponents/Map'

const MapField = ({ className, name, label, fieldProps = {}, ...props }) => {
	const onMapClick = (locationObject, form) => {
		form.setFieldValue(name, locationObject, true)
	}

	return (
		<div className={className}>
			<Field
				name={name}
			>
				{({ form }) => {
					const error = form.touched[name] && form.errors[name]
					return (
						<Form.Field error={!!error} {...fieldProps}>
							{!!label && <label>{label}</label>}
							<Map
								onClick={(location) => onMapClick(location, form)}
							/>
							{form.errors[name] &&
                  form.touched[name] && (
								<span
									style={{
										display: 'block',
										margin: '.28571429rem 0',
										color: 'rgb(159, 58, 56)',
										fontSize: '.92857143em'
									}}
								>
									{form.errors[name]}
								</span>
							)}
						</Form.Field>
					)
				}}
			</Field>
		</div>
	)
}

export default styled(MapField)`
	width: 50%;
  padding-right: .5em;
  margin-bottom: 1em;

  & > .field {
		width: 80%;
	}
`
