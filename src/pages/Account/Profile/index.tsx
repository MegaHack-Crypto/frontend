import React, { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

import ShortcutButton from '../../../components/ShortcutButton';

import { useAuth } from '../../../useAuth';
import api from '../../../services/api';

import {
  Container,
  Content,
  Welcome,
  QRCodeContainer,
  RightCharacter,
  ShortcutContainer,
} from './styles';

const menuItems: any[] = [
  {
    icon: require('../../../assets/images/agenda.svg'),
    title: 'Agenda',
  },
  {
    icon: require('../../../assets/images/exams.svg'),
    title: 'Exames',
  },
  {
    icon: require('../../../assets/images/register.svg'),
    title: 'Meu Cadastro',
  }
];

const AccountProfile: React.FC = () => {
  const { user, token } = useAuth();
  const [qrcode, setQrcode] = useState('');

  useEffect(() => {
    (async function(){
      try {
        const res = await api.get('/qrcode', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        setQrcode(res.data);
      } catch (err) {
        // do-stuff
      }
    })();
  }, [token]);

  return (
    <Container>
      <Content>
        <Welcome>
          <span className="head">Seja bem vindo</span>
          <span className="user">{user.name}</span>
        </Welcome>
  
        <QRCodeContainer>
          <span>Que tal começar testando o seu QRCode?</span>
          {!qrcode && (
            <picture className="qrcode flex">
              <LoadingOutlined style={{ fontSize: 50 }} spin />
            </picture>
          )}

          {!!qrcode && <picture className="qrcode" dangerouslySetInnerHTML={{ __html: qrcode }}></picture>}
        </QRCodeContainer>
  
        <RightCharacter />
  
        <ShortcutContainer>
          {menuItems.map(menu => 
            <ShortcutButton
              key={menu.title}
              icon={<img src={menu.icon} alt={menu.title} />}
              title={menu.title}
            />
          )}
        </ShortcutContainer>
      </Content>
    </Container>
  )
};

export default AccountProfile;
