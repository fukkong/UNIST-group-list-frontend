import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './containers/Home'
import LoginPage from './containers/LoginPage'
import ClubPage from './containers/ClubPage'
import registerServiceWorker from './registerServiceWorker'
import { createBrowserHistory } from 'history'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

ReactDOM.render((
  <Router history={createBrowserHistory}>
    <div>
      <MuiThemeProvider>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/club/:id' component={ClubPage}/>
      </MuiThemeProvider>
    </div>
  </Router>
), document.getElementById('root'))
registerServiceWorker()
