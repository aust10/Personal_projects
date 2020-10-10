import React from 'react'
import { useObserver } from 'mobx-react'
import { Button } from '@material-ui/core'
import { useTicketStore } from '../../store/StoreContext'

function WorkingTicketList (props) {
  const ticketStore = useTicketStore()
  const { history } = props
  return useObserver(() => (
    <div>
      <Button onClick={() => history.push('/WorkingTicketList/DeletedTicket')}>Deleted Tickets</Button>
      <ul>
        {ticketStore.workingTickets.sort((a, b) => a.priority - b.priority).map(ticket => <div
          onClick={() => ticketStore.removeWorkingTicket(ticket._id)} key={ticket._id}
        >
          <h1>{ticket.title}</h1>
          <h3>Priority: {ticket.priority}</h3>
          <p>{ticket.text}</p>
        </div>)}
      </ul>
    </div>
  ))
}

export default WorkingTicketList
