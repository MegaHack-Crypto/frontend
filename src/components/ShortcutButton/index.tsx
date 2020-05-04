import React from 'react';

import { Container, IconContainer, Title } from './styles';

export interface ShortcutButtonProps {
  icon: React.ReactNode;
  title: string;
}

const ShortcutButton: React.FC<ShortcutButtonProps> = ({ icon, title }) => (
  <Container>
    <IconContainer>
      {icon}
    </IconContainer>

    <Title>{title}</Title>
  </Container>
);

export default ShortcutButton;
