import React from 'react';
import { FiBook } from 'react-icons/fi';
import { MdFavorite, MdSpeakerNotes, MdMoreVert } from 'react-icons/md';

import { Container, Header, CircleIcon, ContentContainer, FooterContainer } from './styles';

const ExamCard: React.FC = () => (
  <Container>
    <Header>
      <CircleIcon>
        <FiBook />
      </CircleIcon>
    </Header>

    <ContentContainer>
      <h5>Pedido 5922</h5>
      <p>José de Limeira Franciscano</p>
    </ContentContainer>

    <FooterContainer>
      <section className="left-container">
        <button type="button">
          <MdFavorite />
          <span>128</span>
        </button>
        <button type="button">
          <MdSpeakerNotes />
          <span>128</span>
        </button>
      </section>

      <section className="right-container">
        <button type="button">
          <MdMoreVert className="large" />
        </button>  
      </section>
    </FooterContainer>
  </Container>
);

export default ExamCard;
