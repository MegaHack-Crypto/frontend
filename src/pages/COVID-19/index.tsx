import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import LOGO from '../../assets/images/logo.svg';

import { Container, LeftSide, RightSide, Character, Header } from './styles';
import { HowProtectCovid } from './data';

const COVID19: React.FC = () => (
  <Container>
    <LeftSide>
      <p>O enfrentamento do Corona Vírus requer o esforço conjunto de todos. Veja abaixo como contribuir para a sua saúde e das outras pessoas.</p>
      
      <ol>
        <li>1. Use a máscara</li>
        <li>2. Higienize as mãos</li>
        <li>3. Não frequente aglomerados</li>
      </ol>
    </LeftSide>

    <RightSide>
      <Header>
        <Link to="/">
          <button type="button">
            <MdArrowBack />
          </button>
        </Link>

        <picture className="logo">
          <img src={LOGO} alt="HealChain" />
          <span>Dicas de Saúde</span>
        </picture>
      </Header>

      <article className="how-protect-covid">
        <h1>Use máscara</h1>

        <ul>
          {HowProtectCovid.map(({ icon, content }, idx) => (
            <li key={`item-${idx}`}>
              <img src={icon} alt={`Item ${idx + 1}`} />
              {content}
            </li>
          ))}
        </ul>
      </article>

      <Character />
    </RightSide>
  </Container>
)

export default COVID19;