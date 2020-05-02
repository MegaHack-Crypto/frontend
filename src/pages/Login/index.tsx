import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useModalGallery } from 'react-router-modal-gallery';

import LOGO from '../../assets/images/logo.svg';
import CHARACTER_LOGIN from '../../assets/images/characters-login.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Header, Form, LeftSide, RightSide, Content, Links } from './styles';

const Login: React.FC = () => {
  const { redirectToBack } = useModalGallery();

  return (
    <Container visible footer={null} width={null as any} onCancel={redirectToBack}>
      <Content>
        <LeftSide>
          <img src={LOGO} alt="HealthChain" className="logo" width={350} />

          <Header>
            <h2>Login</h2>
            <span>Entre e use agora.</span>
          </Header>

          <Form>
            <Input placeholder="e-mail" prefix={<MailOutlined />} size="large" />
            <Input placeholder="senha" prefix={<LockOutlined />} size="large" type="password" />

            <div className="buttons">
              <Button type="primary" htmlType="button" shape="round" size="large">Entrar</Button>
            </div>
          </Form>

          <Links>
            <a href="/">Criar uma conta</a>
            <small>|</small>
            <a href="/">Esqueci a senha</a>
            <small>|</small>
            <a href="/">Sobre</a>
          </Links>
        </LeftSide>

        <RightSide>
          <img src={CHARACTER_LOGIN} alt="login" width={450} />
        </RightSide>
      </Content>
    </Container>
  );
}

export default Login;
