import React, { useCallback } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useModalGallery } from 'react-router-modal-gallery';
import { useHistory } from 'react-router-dom';

import LOGO from '../../assets/images/logo.svg';
import CHARACTER_LOGIN from '../../assets/images/characters-login.svg';

import api from '../../services/api';
import { useAuth } from '../../useAuth';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, Header, Form, LeftSide, RightSide, Content, Links } from './styles';

const Login: React.FC = () => {
  const { redirectToBack } = useModalGallery();
  const history = useHistory();
  const { setAuth } = useAuth();

  const signin = useCallback(async () => {
    const email = (document.querySelector('input[name=email]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name=pass]') as HTMLInputElement).value;

    try {
      const res = await api.post('/login', { email, password });
      const data = res?.data;
      setAuth(data);
      history.push('/account');
    } catch (err) {
      // do stuff
    }
    
  }, [history, setAuth]);

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
            <Input name="email" placeholder="e-mail" prefix={<MailOutlined />} size="large" />
            <Input name="pass" placeholder="senha" prefix={<LockOutlined />} size="large" type="password" />

            <div className="buttons">
              <Button type="primary" htmlType="button" shape="round" size="large" onClick={signin}>Entrar</Button>
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
