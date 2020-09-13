import { nanoid } from 'nanoid'

export function createTicketStore () {
  return {
    tickets: [],
    workingTickets: [],
    deletedTickets: [],
    error: null,
    errorInfo: null,
    addTicket (title, priority, text) {
      this.tickets.push({
        title, priority, text, id: nanoid()
      })
    },
    removeTicket (id) {
      console.log(id, 'this is the test')
      this.deletedTickets.forEach(ticket => {
        if (ticket.id === id) {
          console.log('yep')
          this.deletedTickets.splice(this.deletedTickets.indexOf(ticket), 1)
          // this.deletedTickets = this.deletedTickets.filter(ticket => ticket.id !== id)
        }
      })
    },
    addToWorking (id) {
      console.log(id)
      console.log(this.tickets, 'tickets')
      this.tickets.forEach(ticket => {
        if (ticket.id === id) {
          this.workingTickets.push(ticket)
          this.tickets.splice(this.tickets.indexOf(ticket), 1)
        }
      })
    },
    removeWorkingTicket (id) {
      console.log('working')
      this.workingTickets.forEach(ticket => {
        if (ticket.id === id) {
          this.deletedTickets.push(ticket)
          this.workingTickets = this.workingTickets.filter(ticket => ticket.id !== id)
          console.log(this.workingTickets, this.deletedTickets)
        }
      })
    }
  }
}
