import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../service/api';

import { Container, Time } from './style';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={32} color="#fff" />
        </button>
        <strong>24 de set</strong>
        <button type="button">
          <MdChevronRight size={32} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>17:00</strong>
          <span>Alguém</span>
        </Time>
        <Time available>
          <strong>18:00</strong>
          <span>Livre</span>
        </Time>
        <Time>
          <strong>19:00</strong>
          <span>Eddy</span>
        </Time>
      </ul>
    </Container>
  );
}
