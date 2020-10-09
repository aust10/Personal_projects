
import { nanoid } from 'nanoid'

export function createTicketStore () {
  return {
    loggedIn: true,
    tickets: [],
    workingTickets: [],
    deletedTickets: [],
    currentUser: null,
    error: null,
    errorInfo: null,
    signUp (email, password, firstName, lastName) {
      console.log(email, password, 'check it out')
      fetch(
        '/signUp',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
          })
        })
        .then(response => response.json())
        .then(data => {
          // need to work on getting what is needed into the store ie token for fetches and name for headers
          this.loggedIn = true
          this.currentUser = data
          console.log('you got here')
        })
    },
    login (email, password) {
      fetch(
        '/login',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.loggedIn = true
          this.currentUser = data.currentUser
          this.workingTickets = data.currentUser.activeTickets
          this.token = data.token
        })
    },
    logOut () {
      this.loggedIn = false
      this.tickets = []
      this.workingTickets = []
      this.deletedTickets = []
      this.currentUser = null
      this.error = null
      this.errorInfo = null
    },
    addTicket (title, priority, text) {
      this.tickets.push({
        title, priority, text, id: nanoid()
      })
      fetch('/ticketSubmit',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            priority: priority,
            text: text
          })
        }
      )
    },
    removeTicket (id) {
      console.log(id, 'this is the test')
      this.deletedTickets.forEach(ticket => {
        if (ticket.id === id) {
          console.log('yep')
          this.deletedTickets.splice(this.deletedTickets.indexOf(ticket), 1)
          this.UpdateCurrentUser('', '', this.workingTickets)
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
          this.UpdateCurrentUser('', '', ticket)
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
    },
    UpdateCurrentUser (firstName, lastName) {
      fetch('/updateUser',
        {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: this.currentUser._id,
            firstName: firstName,
            lastName: lastName,
            activeTickets: this.workingTickets
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.currentUser = data
        })
    },
    GetTickets () {
      fetch('getTickets',
        {
          method: 'get'
        }
      )
    }
  }
}
