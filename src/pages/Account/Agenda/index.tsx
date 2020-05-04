import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Container, Content, Header, AgendaContainer, CalendarCard, NextCommitmentsContainer } from './styles';
import Commitment from './Commitment';

const AccountAgenda: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <h3>Agenda</h3>
        <MdAddCircle />
      </Header>

      <AgendaContainer>
        <CalendarCard>        
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Calendar date={new Date()} onChange={() => {}} />
          </MuiPickersUtilsProvider>
        </CalendarCard>

        <NextCommitmentsContainer>
          <Header>
            <h4>Próximos compromissos</h4>
          </Header>

          <Commitment type="default" reminder="Exame de sangue" date="2 de julho" />
          <Commitment type="new" />
        </NextCommitmentsContainer>
      </AgendaContainer>
    </Content>
  </Container>
)

export default AccountAgenda;
