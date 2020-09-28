import React, { useState, useMemo, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import api from '../../service/api';

import { Container, Time } from './style';

/* isso deve ser feito no backend */
const range = [8, 9, 10, 11, 12, 14, 15, 16, 17, 18];

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedules, setSchedule] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      /* parametro do agendamento é a data */
      const res = await api.get('schedules', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: res.data.find(
            (apt) => String(parseISO(apt.date)) === String(checkDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

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
        {schedules.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Livre'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
