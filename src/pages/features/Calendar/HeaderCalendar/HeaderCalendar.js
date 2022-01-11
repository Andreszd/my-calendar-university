import CardCalendar from '../CardCalendar';

import { parseToString } from 'libs/toString';

import './HeaderCalendar.css';

const headers = [
  'hrs',
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
        col={parseToString(idx + 1)}
        row={parseToString(1)}
        className="header-calendar">
        {element}
      </CardCalendar>
    ))}
  </>
);

export default HeaderCalendar;
