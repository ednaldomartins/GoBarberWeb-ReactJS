import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../service/api';

import { Container } from './style';

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
    </Container>
  );
}
