import { useContext, useEffect, useState } from 'react';
import { CalendarContext } from 'provider/calendarProvider';

import './CardCalendar.css';

import { mapRow, mapColums, colums, rows, days } from './constants';

import PropTypes from 'prop-types';

const CardCalendar = ({ children, row, col, hourRange, day }) => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const { selectedAssignatures } = useContext(CalendarContext);

  useEffect(() => {
    isRange();
  }, [selectedAssignatures]);

  const isRange = () => {
    let finded = null;
    selectedAssignatures?.forEach((assignatures) => {
      if (!finded) {
        const { schedule, nameSubject } = assignatures;
        finded = schedule.find(
          (period) =>
            days[period.day] === day &&
            parseInt(hourRange.start) >= parseInt(period.start) &&
            parseInt(hourRange.end) <= parseInt(period.end)
        );
        if (finded && !selectedPeriod) {
          setSelectedPeriod({ ...finded, nameSubject });
        }
      }
    });
    return finded;
  };

  const shouldDisabled = () => {
    return selectedPeriod && selectedPeriod?.start !== hourRange.start;
  };

  const calculateRow = () => {
    if (!selectedPeriod && !shouldDisabled()) return mapRow(row);
    const range = mapRow(row);
    const rowStart = range.split('/')[0];
    const rowEnd = parseInt(range.split('/')[1]);
    return `${rowStart}/${rowEnd + (selectedPeriod.duration - 1)}`;
  };

  return (
    <div
      className="card-calendar"
      style={{
        gridRow: calculateRow(),
        gridColumn: mapColums(col),
        display: shouldDisabled() ? 'none' : 'visible',
      }}
    >
      {selectedPeriod?.nameSubject}
      {children}
    </div>
  );
};
CardCalendar.propTypes = {
  children: PropTypes.node,
  row: PropTypes.oneOf(Object.keys(rows)),
  col: PropTypes.oneOf(Object.keys(colums)),
};
export default CardCalendar;
