import { nanoid } from 'nanoid'

export function createTicketStore () {
  return {
    tickets: [],
    workingTickets: [],
    addTicket (title, priority, text) {
      this.tickets.push({
        title, priority, text, id: nanoid()
      })
    },
    removeTicket (id) {
      console.log('worked')
      this.tickets = this.tickets.filter(ticket => ticket.id !== id)
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
      console.log('worked')
      this.workingTickets = this.workingTickets.filter(ticket => ticket.id !== id)
    }
  }
}
