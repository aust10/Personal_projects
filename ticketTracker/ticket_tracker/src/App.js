import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Breadcrum from './components/Breadcrumb/Breadcrumb'
import Home from './components/Home/Home'
import TicketList from './components/TicketList/TicketList'
import Settings from './components/Settings/Settings'
import About from './components/Settings/About'
import Main from './components/Settings/Main'
import DeletedTicket from './components/WorkingTickets/DeletedTicket'
import WorkingTicketList from './components/WorkingTickets/WorkingTicketList'
import SignUp from '../src/components/SignUp/SignUp'
import { useTicketStore } from '../src/store/StoreContext'
import { useObserver } from 'mobx-react'


function App () {
  const ticketStore = useTicketStore()
  return useObserver(() => (
    <div className='App'>
      {ticketStore.loggedIn
        ? <>
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
            <Route
              exact
              path='/WorkingTicketList'
              render={props => <WorkingTicketList {...props} />}
            />
            <Route
              exact
              path='/WorkingTicketList/DeletedTicket'
              render={props => <DeletedTicket {...props} />}
            />
          </Switch>
        </>
        : <SignUp />}
    </div>
  )

  )
}

export default App
