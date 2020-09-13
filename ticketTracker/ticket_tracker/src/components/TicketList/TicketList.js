import React from 'react'
import { useObserver } from 'mobx-react'
import { useTicketStore } from '../../store/StoreContext'

function TicketList (props) {
  const ticketStore = useTicketStore()
  return useObserver(() => (
    <div>
      <ul>
        {ticketStore.tickets.sort((a, b) => a.priority - b.priority).map(ticket => <div
          onClick={() => ticketStore.addToWorking(ticket.id)} key={ticket.id}
        >
          <h1>{ticket.title}</h1>
          <h3>Priority: {ticket.priority}</h3>
          <p>{ticket.text}</p>
        </div>)}
      </ul>
    </div>
  ))
}

export default TicketList
