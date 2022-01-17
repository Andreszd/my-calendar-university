import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';

import { mapRow, mapColums, days } from 'pages/features/Calendar/constants';

import CardCalendar from 'pages/features/Calendar/CardCalendar';

export default function TimeSlotGroup({ row, col, hourRange, day }) {
  const [subjectPeriod, setSubjectPeriod] = useState(null);
  const [colorClass, setColorClass] = useState('');
  const { subjectGroupPeriods, collisions, getSubjectById } =
    useContext(CalendarContext);

  useEffect(() => {
    let period = null;
    if (collisions.length > 0) {
      period = getMatchingSubjectPeriod(collisions);
      if (period && subjectPeriod) {
        setSubjectPeriod(period);
        setColorClass('collision');
      }
    }
    if (!period) {
      period = getMatchingSubjectPeriod(subjectGroupPeriods);
      if (period) {
        const periodColor = getSubjectById(period);
        if (periodColor) setColorClass(periodColor?.className);
        setSubjectPeriod(period);
      }
    }
    if (!period && subjectPeriod) {
      setSubjectPeriod(null);
      setColorClass('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectGroupPeriods, collisions]);

  const getMatchingSubjectPeriod = (periods) => {
    return periods.find(
      ({ start, end, day: dayOfSubjectPeriod }) =>
        days[dayOfSubjectPeriod] === day &&
        parseInt(hourRange.start) >= parseInt(start) &&
        parseInt(hourRange.end) <= parseInt(end)
    );
  };
  const shouldDisabled = () => {
    return subjectPeriod && subjectPeriod.start !== hourRange.start;
  };

  const calculateRow = () => {
    if (!subjectPeriod && !shouldDisabled()) return mapRow(row);
    const range = mapRow(row);
    const rowStart = range.split('/')[0];
    const rowEnd = parseInt(range.split('/')[1]);
    return `${rowStart}/${rowEnd + (subjectPeriod?.duration - 1)}`;
  };
  return (
    <>
      <CardCalendar
        row={calculateRow()}
        col={mapColums(col)}
        day={day}
        className="time-slot-group"
        isDisabled={shouldDisabled()}
        modifier={colorClass}>
        {subjectPeriod?.subjectName && (
          <>
            <span>{subjectPeriod.subjectName}</span>
            <span>
              {subjectPeriod.room} G:{subjectPeriod?.groupCode}
            </span>
          </>
        )}
        {subjectPeriod?.subjectNames && (
          <>
            <span>{subjectPeriod.subjectNames[0]}</span>
            <span>G:{subjectPeriod?.groupCodes[0]}</span>
            <span>{subjectPeriod.subjectNames[1]}</span>
            <span>G:{subjectPeriod?.groupCodes[1]}</span>
          </>
        )}
      </CardCalendar>
    </>
  );
}
