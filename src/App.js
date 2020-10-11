import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Global } from '@emotion/core'
import globalStyle from './Styles/GlobalStyles'
import UsersListPage from './Pages/UsersListPage/UsersListPage'
import AddUserPage from './Pages/AddUserPage/AddUserPage'
import { ToastProvider } from 'react-toast-notifications'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
	return (
		<>
			<Global styles={globalStyle} />
			<ToastProvider>
				<Router>
					<Switch>
						<Route path="/addUser">
							<AddUserPage />
						</Route>
						<Route path="/">
							<UsersListPage />
						</Route>
					</Switch>
				</Router>
			</ToastProvider>
		</>
	)
}

export default App
