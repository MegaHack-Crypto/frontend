import React from 'react';

import LEFT_BACKGROUND from '../../assets/images/left-background-home2.svg';
import RIGHT_BACKGROUND from '../../assets/images/right-background-home2.svg';
import CHARACTER from '../../assets/images/character-home2.svg';
import LOGO from '../../assets/images/logo.svg';

import MainMenu from './MainMenu';
import CallToAction from './CallToAction';

import { Container, LeftBackground, RightBackground, Character, Content } from './styles';

const Home: React.FC = () => (
  <Container>
    <LeftBackground url={LEFT_BACKGROUND} />
    <RightBackground url={RIGHT_BACKGROUND} />

    <Content>
      <img src={LOGO} alt="logo" className="logo" />
      <MainMenu />
      <CallToAction />
    </Content>

    <Character src={CHARACTER} alt="character" />
  </Container>
);

export default Home;
