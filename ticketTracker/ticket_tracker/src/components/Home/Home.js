import React, { useState } from 'react'
import { useTicketStore, TicketProvider } from '../../store/StoreContext'
import { NewTicketForm } from '../NewTicketForm/NewTicketForm'
import { useObserver } from 'mobx-react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import TicketList from '../TicketList/TicketList'
import WorkingTicketList from '../WorkingTickets/WorkingTicketList'
import { Container } from '@material-ui/core'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const useStyles = makeStyles({
  root: {
    width: '35%',
    height: '35%',
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
  const [active, setActive] = useState(false)
  const styles = useStyles()
  const { history } = props
  return useObserver(() => (
    <Container maxWidth={false} className={styles.container}>
      <ErrorBoundary>
        <Card className={styles.root}>
          <Typography data-testid='title' className={styles.title} gutterBottom>
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
              Click for your working Tickets
                </Typography>
            </Typography>
              : <Typography variant='h4' onClick={() => setActive(true)} className={styles.ticketListTitle} gutterBottom>
              Your Working Tickets
                <Typography variant='h6'>
              Click for all active Tickets
                </Typography>
            </Typography>}
          </Container>
          {active
            ? <Container>
              <TicketList />
            </Container>
            : <Container>
              <WorkingTicketList history={history} />
            </Container>}
        </Card>
      </ErrorBoundary>
    </Container>
  ))
}

export default Home
