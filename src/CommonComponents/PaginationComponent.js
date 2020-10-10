import React from 'react'
import { Icon, Pagination } from 'semantic-ui-react'

const PaginationComponent = ({
	defaultActivePage,
	showEllipsis,
	showFirstItem,
	showLastItem,
	totalPages,
	onChange
}) => (
	<Pagination
		defaultActivePage={defaultActivePage}
		ellipsisItem={showEllipsis && { content: <Icon name='ellipsis horizontal' />, icon: true }}
		firstItem={showFirstItem && { content: <Icon name='angle double left' />, icon: true }}
		lastItem={showLastItem && { content: <Icon name='angle double right' />, icon: true }}
		prevItem={{ content: <Icon name='angle left' />, icon: true }}
		nextItem={{ content: <Icon name='angle right' />, icon: true }}
		totalPages={totalPages}
		onPageChange={onChange}
	/>
)

export default PaginationComponent
