import React, { useState, useEffect } from 'react'
import { Form, Image } from 'semantic-ui-react'
import { Field } from 'formik'
import Dropzone from 'react-dropzone'
import styled from '@emotion/styled'

const FileUpload = ({ className, name, label, fieldProps = {}, ...props }) => {
	const [selectedFile, setSelectedFile] = useState(null)
	const [preview, setPreview] = useState(null)

	// Setting image preview
	useEffect(() => {
		if (selectedFile) {
			const reader = new FileReader()
			reader.onloadend = () => setPreview(reader.result)
			reader.readAsDataURL(selectedFile)
		}
	}, [selectedFile])

	const _onDrop = (acceptedFiles, form) => {
		setSelectedFile(acceptedFiles[0])
		// @TODO: use firebase as the data store to get a real url
		form.setFieldValue(name, 'avatarURL', true)
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
							<Dropzone onDrop={(acceptedFiles) => _onDrop(acceptedFiles, form)}>
								{({ getRootProps, getInputProps }) => (
									<section>
										<div className="dropzone" {...getRootProps()}>
											<input {...getInputProps()} />
											<p>Drag avatar here, or click to select file</p>
										</div>
									</section>
								)}
							</Dropzone>
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
			<div className="image-preview">
				{preview && <Image src={preview} avatar/>}
			</div>
		</div>
	)
}

export default styled(FileUpload)`
	width: 50%;
  padding-right: .5em;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > .field {
		width: 80%;
	}

	& > .image-preview {
		width: 15%;
		min-height: 100%;
	}

	.dropzone {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		border-width: 2px;
		border-radius: 2px;
		border-color: #eee;
		border-style: dashed;
		background-color: #fafafa;
		color: #bdbdbd;
		outline: none;
		transition: border .24s ease-in-out;
	}
`
