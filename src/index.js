import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import About from './views/about'
import Home from './views/home'
import Services from './views/services'
import Schedule from './views/schedule'
import Contact from './views/contact'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={Home} exact path="/" />
        <Route component={Services} exact path="/services" />
        <Route component={Schedule} exact path="/schedule" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
