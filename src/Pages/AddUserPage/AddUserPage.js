import React from 'react'
import styled from '@emotion/styled'
import Page from './../../CommonComponents/Page'
import { Header } from 'semantic-ui-react'
import AddUserForm from './../AddUserPage/AddUserForm'

const AddUserPage = ({ className }) => {
	return (
		<Page className={className}>
			<Header as="h2">AddUser</Header>
			<AddUserForm />
		</Page>
	)
}

export default styled(AddUserPage)`
  h2.ui.header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
`
