import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container, Buttons } from './styles';

const CallToAction: React.FC = () => (
  <Container>
    <h1>Atenção Especial</h1>

    <p>Em tempo de Corona Vírus, mantenha-se bem protegido e evite frequentar lugares movimentados, levar as mãos nos olhos, nariz e boca, e não se esqueça de tomar sua dose diária de luz solar.</p>

    <Buttons>
      <button className="signin" type="button">Entrar</button>
      
      <section className="covid-button">
        <small>Saiba mais sobre a</small>

        <NavLink to="/covid">
          <button className="covid" type="button">COVID-19</button>
        </NavLink>
      </section>
    </Buttons>
  </Container>
);

export default CallToAction;
