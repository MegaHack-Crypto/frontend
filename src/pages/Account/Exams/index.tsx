import React from 'react';
import { MdAddCircle } from 'react-icons/md';

import { Container, Content, Header, ExamsContainer, ExamColumnHeader } from './styles';
import ExamCard from './ExamCard';

const AccountAgenda: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <h3>Exames</h3>
        <MdAddCircle />
      </Header>

      <ExamsContainer>
        <section>
          <ExamColumnHeader color="#FFD86F">Recomendados</ExamColumnHeader>
          <ExamCard />
        </section>

        <section>
          <ExamColumnHeader color="#FF80AC">Agendados</ExamColumnHeader>
          <ExamCard />
          <ExamCard />
        </section>

        <section>
          <ExamColumnHeader color="#7EE1FF">Pegar resultado</ExamColumnHeader>
          <ExamCard />
        </section>
      </ExamsContainer>
    </Content>
  </Container>
)

export default AccountAgenda;
