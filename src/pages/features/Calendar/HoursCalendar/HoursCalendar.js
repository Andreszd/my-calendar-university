import CardCalendar from "../CardCalendar";

import { parseToString } from "libs/toString";

const hours = [
  "06:45",
  "07:30",
  "08:15",
  "09:00",
  "09:45",
  "10:30",
  "11:15",
  "12:00",
  "12:45",
  "13:30",
  "14:15",
  "15:00",
  "15:45",
  "16:30",
  "17:15",
  "18:00",
  "18:45",
  "21:00",
];

const HoursCalendar = () => (
  <>
    {hours.map((element, idx) => (
      <CardCalendar
        key={idx}
        row={parseToString(idx + 2)}
        col={parseToString(1)}
      >
        {element}
      </CardCalendar>
    ))}
  </>
);

export default HoursCalendar;
