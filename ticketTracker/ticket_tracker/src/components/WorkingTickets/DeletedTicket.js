import { useObserver } from 'mobx-react'
import React from 'react'
import { useTicketStore } from '../../store/StoreContext'

const DeletedTicket = () => {
  const ticketStore = useTicketStore()
  return useObserver(() => (
    <div>
      {ticketStore.deletedTickets.map(ticket => (
        <div 
          key={ticket}
          onClick={() => ticketStore.removeTicket(ticket._id)}
        >
          <h1>{ticket.title}</h1>
          <h3>Priority: {ticket.priority}</h3>
          <p>{ticket.text}</p>
        </div>
      ))}
    </div>

  ))
}

export default DeletedTicket
