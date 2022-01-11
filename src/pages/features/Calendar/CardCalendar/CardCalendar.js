import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';
import classNames from 'classnames';

import './CardCalendar.css';

import { mapRow, mapColums, colums, rows, days } from './constants';

import PropTypes from 'prop-types';

const CardCalendar = ({ children, row, col, hourRange, day, className }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const { selectedAssignatures } = useContext(CalendarContext);

  useEffect(() => {
    const period = isRange();
    if (!period && selectedPeriod) setSelectedPeriod(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAssignatures]);

  const isRange = () => {
    //TODO refactor code
    // rename component
    let finded = null;
    selectedAssignatures?.forEach((assignatures) => {
      if (!finded) {
        const { schedule, nameSubject, className } = assignatures;
        finded = schedule.find(
          (period) =>
            days[period.day] === day &&
            parseInt(hourRange.start) >= parseInt(period.start) &&
            parseInt(hourRange.end) <= parseInt(period.end)
        );
        if (finded && !selectedPeriod) {
          setSelectedPeriod({ ...finded, nameSubject, className });
        }
      }
    });
    return finded;
  };

  const shouldDisabled = () => {
    return selectedPeriod && selectedPeriod.start !== hourRange.start;
  };

  const calculateRow = () => {
    if (!selectedPeriod && !shouldDisabled()) return mapRow(row);
    const range = mapRow(row);
    const rowStart = range.split('/')[0];
    const rowEnd = parseInt(range.split('/')[1]);
    return `${rowStart}/${rowEnd + (selectedPeriod?.duration - 1)}`;
  };

  return (
    <div
      className={classNames(`card-calendar ${className}`, {
        'not-show': shouldDisabled(),
        [`card-calendar--${selectedPeriod?.className}`]: selectedPeriod,
      })}
      style={{
        gridRow: calculateRow(),
        gridColumn: mapColums(col),
      }}>
      {selectedPeriod?.nameSubject}
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
