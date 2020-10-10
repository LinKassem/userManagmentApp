import React, { createRef } from 'react'
import styled from '@emotion/styled'
import { Container, Header, Sticky } from 'semantic-ui-react'

const Page = ({ className, pageTitle, children, ...props }) => {
	const contextRef = createRef()
	return (
		<div className={className} ref={contextRef} {...props}>
			<Sticky className="page-header-container" context={contextRef}>
				<Header as="h1">
            User Management App
				</Header>
			</Sticky>
			<Container>
				{children}
			</Container>
		</div>
	)
}

export default styled(Page)`
  .page-header-container {
    margin-bottom: 13px;
  }

  h1.ui.header {
    padding: 23px;
    background-color: #fff;
  }
`
