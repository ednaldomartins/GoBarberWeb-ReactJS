import React from 'react';
import { MdNotifications } from 'react-icons/md';

import { Container, Badge } from './style';

export default function Notificate() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#00b2cc" size={20} />
      </Badge>
    </Container>
  );
}
