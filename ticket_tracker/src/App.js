import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Breadcrum from './components/Breadcrumb'
import Home from './components/Home'
import TicketList from './components/TicketList'
import Settings from './components/Settings'
import About from './components/About'
import Main from './components/Main'

function App () {
  // const ticketStore = useTicketStore()
  return (
    <div className='App'>
      <Breadcrum />
      <Switch>
        <Route exact from='/' render={props => <Home {...props} />} />
        <Route exact path='/TicketList' render={props => <TicketList {...props} />} />
        <Route exact path='/Settings' render={props => <Settings {...props} />} />
        <Route
          exact
          path='/Settings/About'
          render={props => <About {...props} />}
        />
        <Route
          exact
          path='/Settings/Main'
          render={props => <Main {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
