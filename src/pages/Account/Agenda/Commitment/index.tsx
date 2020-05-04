import React from 'react';

import { Container, ReminderText, DateContainer, CalendarIcon, AddIcon, NewContainer } from './styles';

export  interface CommitmentProps {
  type?: 'default' | 'new';
  reminder?: string;
  date?: string; 
}

const Commitment: React.FC<CommitmentProps> = ({ type = 'default', reminder, date }) => (
  <Container commitmentType={type}>
    {!!reminder && (
      <React.Fragment>
        <ReminderText>
          {reminder}
        </ReminderText>

        <DateContainer>
          <CalendarIcon />
          <span>{date}</span>
        </DateContainer>
      </React.Fragment>
    )}

    {type === 'new' && (
      <NewContainer>
        <AddIcon />
      </NewContainer>
    )}
  </Container>
);

export default Commitment;
