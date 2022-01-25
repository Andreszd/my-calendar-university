import useTimeSlotGroup from 'hooks/useTimeSlotGroup';

import CardCalendar from 'pages/features/Calendar/CardCalendar';

export default function TimeSlotGroup({ row, col, hourRange, day }) {
  const {
    colorClass,
    subjectPeriod,
    getRowsAmount,
    getColsAmount,
    shouldDisabled,
  } = useTimeSlotGroup({ row, col, hourRange, day });

  return (
    <>
      <CardCalendar
        row={getRowsAmount()}
        col={getColsAmount()}
        day={day}
        className="time-slot-group"
        isDisabled={shouldDisabled()}
        modifier={colorClass}>
        {subjectPeriod?.subjectName && (
          <>
            <span>
              {subjectPeriod?.isClass === false ? '*' : ''}
              {subjectPeriod.subjectName}
            </span>
            <span>
              {subjectPeriod.room}
              G:{subjectPeriod?.groupCode}
            </span>
          </>
        )}
        {subjectPeriod?.subjectNames && (
          <>
            <span>{subjectPeriod.subjectNames[0]}</span>
            <span>G:{subjectPeriod?.createdBy?.groupCodes[0]}</span>
            <span>{subjectPeriod.subjectNames[1]}</span>
            <span>G:{subjectPeriod?.createdBy?.groupCodes[1]}</span>
          </>
        )}
      </CardCalendar>
    </>
  );
}
