import React, { useState, useMemo } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../service/api';

import { Container, Time } from './style';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft onClick={handlePrevDay} size={32} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button">
          <MdChevronRight onClick={handleNextDay} size={32} color="#fff" />
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
