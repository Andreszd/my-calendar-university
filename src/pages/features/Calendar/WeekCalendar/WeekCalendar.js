import HeaderCalendar from '../HeaderCalendar';
import HoursCalendar from '../HoursCalendar';
import CardCalendar from '../CardCalendar';
import GridCalendar from 'components/layout/GridCalendar';

import { calendarKeys, calendarValues } from './constants';
import { parseToString } from 'libs/toString';

import './WeekCalendar.css';
//TODO: Refactor in how rendered all cards
const WeekCalendar = () => {
  return (
    <div className="week-calendar">
      <GridCalendar>
        <HeaderCalendar />
        <HoursCalendar />
        {calendarValues.map((day, idxCol) => {
          const { periodsDay } = day;
          return periodsDay.map((segmentHour, idxRow) => (
            <CardCalendar
              key={`${calendarKeys[idxCol]}-${segmentHour.start}:${segmentHour.end}`}
              row={parseToString(idxRow + 2)}
              col={parseToString(idxCol + 2)}
            >
              {segmentHour.start} - {segmentHour.end}
            </CardCalendar>
          ));
        })}
      </GridCalendar>
    </div>
  );
};

export default WeekCalendar;
