import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const MENU_ITEMS = [
  { to: '/', title: 'Início' },
  { to: '/', title: 'Minha carteirinha' },
  { to: '/', title: 'Agendar consulta' },
  { to: '/', title: 'Resultado de exames' },
];

const MainMenu: React.FC = () => (
  <Container>
    {MENU_ITEMS.map(menu => (
      <li key={menu.title}>
        <Link to={menu.to}>
          {menu.title}
        </Link>
      </li>
    ))}
  </Container>
);

export default MainMenu;
