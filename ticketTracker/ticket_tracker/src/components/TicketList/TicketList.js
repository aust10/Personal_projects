import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react'
import { useTicketStore } from '../../store/StoreContext'

function TicketList (props) {
  const ticketStore = useTicketStore()
  useEffect(() => {
    ticketStore.GetTickets()
  }, [ticketStore.loggedIn])
  return useObserver(() => (
    <div>
      {ticketStore.loggedIn
        ? <ul>
          {ticketStore.tickets.sort((a, b) => a.priority - b.priority).map(ticket => <div
            key={ticket._id}
          >
            <h1>{ticket.title}</h1>
            <h3>Priority: {ticket.priority}</h3>
            <p>{ticket.text}</p>
          </div>)}
        </ul>
        : <ul>
          {ticketStore.tickets.sort((a, b) => a.priority - b.priority).map(ticket => <div
            onClick={() => ticketStore.addToWorking(ticket._id)} key={ticket._id}
          >
            <h1>{ticket.title}</h1>
            <h3>Priority: {ticket.priority}</h3>
            <p>{ticket.text}</p>
          </div>)}
        </ul>}
    </div>
  ))
}

export default TicketList
