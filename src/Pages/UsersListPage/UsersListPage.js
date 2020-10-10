import React from 'react'
import styled from '@emotion/styled'
import Page from './../../CommonComponents/Page'
import UserList from './UsersList'
import { Header, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const UserListPage = ({ className }) => {
	const history = useHistory()

	return (
		<Page className={className} pageTitle="Users List">
			<Header as="h2">
				Users List
				<Button
					content='Add User'
					onClick={() => { history.push('/addUser') }}
					primary
				/>
			</Header>
			<UserList />
		</Page>
	)
}

export default styled(UserListPage)`
  h2.ui.header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
`
