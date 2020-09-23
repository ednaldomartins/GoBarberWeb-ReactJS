import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '../notification';

import logo from '../../assets/logo-orange.png';
import { Container, Content, Profile } from './style';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />
          <Profile>
            <div>
              <strong>Ednaldo Martins</strong>
              <Link to="profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/64/abott@adorable.png"
              alt="Avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
