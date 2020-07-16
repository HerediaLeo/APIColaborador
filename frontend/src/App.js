import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './routes/routes'

import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          {routes.map((route, index) => (
              <Route exact key={index} path={route.path}>
                <route.component/>
              </Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}

export default App
