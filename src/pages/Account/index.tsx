import React from 'react';

import AccountToolbar from '../../components/AccountToolbar';

import AccountProfile from './Profile';
import AccountDoctors from './Doctors';
import AccountAgenda from './Agenda';
import AccountExams from './Exams';
import { Container } from './styles';

const Account: React.FC = () => (
  <Container>
    <AccountToolbar />
    <AccountProfile />
    <AccountDoctors />
    <AccountAgenda />
    <AccountExams />
  </Container>
);

export default Account;
