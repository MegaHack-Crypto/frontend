import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import LOGO from '../../assets/images/logo.svg';

import { useAuth } from '../../useAuth';

import { Container, Content, Profile, NotificationsContainer, NotificationsIcon } from './styles';

const AccountToolbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Content>
        <img src={LOGO} alt="HealthChain" className="logo" />
  
        <NotificationsContainer>
          <NotificationsIcon />
          <span className="count">99</span>
        </NotificationsContainer>
  
        <Profile>
          <Avatar size={50} icon={<UserOutlined />} />
          <span className="name">{user.name}</span>
          <button type="button" className="logout" onClick={logout}>sair</button>
        </Profile>
      </Content>
    </Container>
  )
};

export default AccountToolbar;
