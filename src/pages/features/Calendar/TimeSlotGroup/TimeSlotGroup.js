import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';

import { mapRow, mapColums, days } from 'pages/features/Calendar/constants';

import CardCalendar from 'pages/features/Calendar/CardCalendar';

export default function TimeSlotGroup({ row, col, hourRange, day, className }) {
  const [subjectPeriod, setSubjectPeriod] = useState(null);
  const [colorClass, setColorClass] = useState('');
  const { selectedSubjects, collisions, getColorPeriodById } =
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
      period = getMatchingSubjectPeriod(selectedSubjects);
      if (period) {
        const periodColor = getColorPeriodById(period);
        if (periodColor) setColorClass(periodColor?.className);
        setSubjectPeriod(period);
      }
    }
    if (!period && subjectPeriod) {
      setSubjectPeriod(null);
      setColorClass('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubjects, collisions]);

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
        isDisabled={shouldDisabled()}
        modifier={colorClass}>
        {subjectPeriod?.subjectName || subjectPeriod?.subjectNames}
      </CardCalendar>
    </>
  );
}
