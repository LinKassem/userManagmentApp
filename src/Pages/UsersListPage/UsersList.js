import React, { useEffect, useState } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import PaginationComponent from './../../CommonComponents/PaginationComponent'
import axios from 'axios'

const UsersList = () => {
	const [usersData, setUsersData] = useState([])
	const [activePage, setActivePage] = useState(1)

	const onPageChange = (e, pageInfo) => {
		setActivePage(pageInfo.activePage)
	}

	useEffect(() => {
		axios.get('https://reqres.in/api/users/?page=' + activePage)
			.then((response) => {
				setUsersData(response.data.data)
			}, (error) => {
				console.log(error)
			})
	}, [activePage])
	return (
		<>
			<Table basic='very' celled collapsing>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{ usersData && usersData.map((user) =>
						<Table.Row key={user.id}>
							<Table.Cell>
								<Header as='h4' image>
									<Image src={user.avatar} rounded size='mini' />
									<Header.Content>
										{`${user.first_name} ${user.last_name}`}
									</Header.Content>
								</Header>
							</Table.Cell>
							<Table.Cell>{user.email}</Table.Cell>
						</Table.Row>
					)}
				</Table.Body>
			</Table>
			<PaginationComponent
				defaultActivePage={1}
				showEllipsis={false}
				showFirstItem={false}
				showLastItem={false}
				totalPages={2}
				onChange={onPageChange}
			/>
		</>
	)
}

export default UsersList
