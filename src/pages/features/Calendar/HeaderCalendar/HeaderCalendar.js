import CardCalendar from '../CardCalendar';

import { parseToString } from 'libs/toString';

import { mapRow, mapColums } from 'pages/features/Calendar/constants';

import './HeaderCalendar.css';

const headers = [
  'Hrs',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const HeaderCalendar = () => (
  <>
    {headers.map((element, idx) => (
      <CardCalendar
        key={idx}
        col={mapColums(parseToString(idx + 1))}
        row={mapRow(parseToString(1))}
        className="header-calendar">
        {element}
      </CardCalendar>
    ))}
  </>
);

export default HeaderCalendar;
