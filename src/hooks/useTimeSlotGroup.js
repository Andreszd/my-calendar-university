import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';

import { mapRow, mapColums, days } from 'pages/features/Calendar/constants';

export default function useTimeSlotGroup({ row, col, hourRange, day }) {
  const [subjectPeriod, setSubjectPeriod] = useState(null);
  const [colorClass, setColorClass] = useState('');

  const { subjectGroupPeriods, collisions, modifiedGroups, getSubjectById } =
    useContext(CalendarContext);

  useEffect(() => {
    checkMatchOfSubjectPeriods();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectGroupPeriods, collisions, modifiedGroups]);

  const checkMatchOfSubjectPeriods = () => {
    let period = null;
    period = checkCollisionExist();
    if (period) return;
    period = checkNewsGroups();
    if (period) return;
    period = checkMatchSubjectPeriod();

    if (!period && subjectPeriod) {
      setSubjectPeriod(null);
      setColorClass('');
    }
  };
  const checkCollisionExist = () => {
    let period = null;
    if (collisions.length > 0) {
      period = getMatchingSubjectPeriod(collisions);
      if (period && subjectPeriod) {
        setSubjectPeriod(period);
        setColorClass('collision');
      }
    }
    return period;
  };

  const checkNewsGroups = () => {
    let period = null;
    if (modifiedGroups.length > 0) {
      period = getMatchingSubjectPeriod(modifiedGroups);
      if (period) {
        const subject = getSubjectById(period);
        if (subject) setColorClass(subject?.className);
        setSubjectPeriod(period);
      }
    }
    return period;
  };

  const checkMatchSubjectPeriod = () => {
    let period = null;
    period = getMatchingSubjectPeriod(subjectGroupPeriods);
    if (period) {
      const subject = getSubjectById(period);
      if (subject) setColorClass(subject?.className);
      setSubjectPeriod(period);
    }
    return period;
  };

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

  const getRowsAmount = () => {
    return calculateRow();
  };

  const getColsAmount = () => {
    return mapColums(col);
  };
  return {
    colorClass,
    subjectPeriod,
    getRowsAmount,
    getColsAmount,
    shouldDisabled,
  };
}
