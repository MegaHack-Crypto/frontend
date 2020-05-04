import React from 'react';
import { MdSearch, MdAddCircle } from 'react-icons/md';

import Doctor from './doctor';
import {
  Container,
  Content,
  Header,
  Doctors,
  AddDoctor,
} from './styles';

const doctors: any[] = [
  {
    name: 'David James',
    crm: '0526.85166',
    speciality: 'Cardiovascular',
  },
  {
    name: 'Tony Stark',
    crm: '0526.85166',
    speciality: 'Otorrino',
  },
  {
    name: 'Jessie Berry',
    crm: '0526.85166',
    speciality: 'Psicólogo(a)',
  },
  {
    name: 'Gleb Kuznetsov',
    crm: '0526.85166',
    speciality: 'Gastro',
  },
];

const AccountDoctors: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <h3>Meus médicos</h3>
        <MdSearch />
      </Header>

      <Doctors>
        <AddDoctor>
          <MdAddCircle />
          <span>adicionar...</span>
        </AddDoctor>

        {doctors.map(doctor => <Doctor key={doctor.name} {...doctor} />)}
      </Doctors>
    </Content>
  </Container>
);

export default AccountDoctors;
