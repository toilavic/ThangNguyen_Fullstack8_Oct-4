import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from './components/Main'
import CardInfo from './components/CardInfo'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(routeProps) => <Main {...routeProps} />} />
        <Route exact path="/:id" render={(routeProps) => <CardInfo />} />
      </Switch>

    </Router>
  )
}

export default App;