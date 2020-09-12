import React, { useState } from 'react'
import { useTicketStore, TicketProvider } from '../store/StoreContext'
import { NewTicketForm } from './NewTicketForm'
import { useObserver } from 'mobx-react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TicketList from './TicketList'
import WorkingTicketList from './WorkingTicketList'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '35%',
    height: 270,
    padding: 10,
    margin: 5

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#67000C'
  },
  ticketListTitle: {
    flexDirection: 'row',
    // fontSize: 25,
    fontWeight: 'bold',
    color: '#67000C',
    textDecoration: 'underline'
  },
  ticketListTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  ticketList: {
    width: '65%',
    padding: 10,
    margin: 5
  }
})

const Home = (props) => {
  const [active, setActive] = useState(true)
  const styles = useStyles()

  return useObserver(() => (
    <Container maxWidth={false} className={styles.container}>
      <Card className={styles.root}>
        <Typography className={styles.title} gutterBottom>
          Ticket Form
        </Typography>
        <NewTicketForm />
      </Card>
      <Card className={styles.ticketList}>
        <Container className={styles.ticketListTitleContainer}>
          {active
            ? <Typography variant='h4' onClick={() => setActive(false)} className={styles.ticketListTitle} gutterBottom>
              Active Tickets
              <Typography variant='h6'>
              Click for working Tickets
              </Typography>
              </Typography>
            : <Typography variant='h4' onClick={() => setActive(true)} className={styles.ticketListTitle} gutterBottom>
              Working Tickets
              <Typography variant='h6'>
              Click for active Tickets
              </Typography>
              </Typography>}
        </Container>
        {active
          ? <Container>
            <TicketList />
          </Container>
          : <Container>
            <WorkingTicketList />
          </Container>}
      </Card>
    </Container>
  ))
}

export default Home
