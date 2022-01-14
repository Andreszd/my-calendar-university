import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';
import classNames from 'classnames';

import './CardCalendar.css';

import { mapRow, mapColums, colums, rows, days } from './constants';

import PropTypes from 'prop-types';

const CardCalendar = ({ children, row, col, hourRange, day, className }) => {
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
    if (!period && subjectPeriod) setSubjectPeriod(null);
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
    <div
      className={classNames(`card-calendar ${className}`, {
        'not-show': shouldDisabled(),
        [`card-calendar--${colorClass}`]: subjectPeriod,
      })}
      style={{
        gridRow: calculateRow(),
        gridColumn: mapColums(col),
      }}>
      {subjectPeriod?.subjectName}
      {subjectPeriod?.subjectNames}
      <br />
      {children}
    </div>
  );
};
CardCalendar.propTypes = {
  children: PropTypes.node,
  row: PropTypes.oneOf(Object.keys(rows)),
  col: PropTypes.oneOf(Object.keys(colums)),
  className: PropTypes.string,
};
CardCalendar.defaultProps = {
  className: '',
};

export default CardCalendar;

/*
  const isRange = () => {
    //TODO refactor code
    // rename component
    let finded = null;
    selectedSubjects?.forEach((period) => {
      if (!finded) {
        const { schedule, subjectName, className } = period;
        finded = schedule.find(
          (period) =>
            days[period.day] === day &&
            parseInt(hourRange.start) >= parseInt(period.start) &&
            parseInt(hourRange.end) <= parseInt(period.end)
        );
        if (finded && (!selectedPeriod || finded.collision)) {
          setSelectedPeriod({ ...finded, subjectName, className });
        }
      }
    });
    return finded;
  };
  */
