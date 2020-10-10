import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            {/* Add component here */}
          </Route>
          <Route path="/">
            {/* Add component here */}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
