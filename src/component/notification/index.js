import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  Scroll,
  NotificationList,
  Notification,
} from './style';

export default function Notificate() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#00b2cc" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Voce possui um novo agendamento</p>
            <time>há 2 horas</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
