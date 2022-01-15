import React, { useState } from 'react';

import { getRandomClassColor, enableColor } from 'libs/colors';

export const CalendarContext = React.createContext();

export function CalendarProvider({ children }) {
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [collisions, setCollisions] = useState([]);
  const [colorsPeriod, setColorsPeriod] = useState([]);

  const addSubject = (subject) => {
    const newSubject = copyAllSubject(subject);

    const { subjectCode, groupCode, subjectName } = newSubject;

    const periodsOfSubject = newSubject.schedule.map((daySchedule) => ({
      ...daySchedule,
      subjectCode,
      groupCode,
      subjectName,
    }));

    addClassToPeriodSubject(newSubject);
    checkPeriodsCollision(periodsOfSubject);
    setSelectedSubjects([...selectedSubjects, ...periodsOfSubject]);
  };

  const addClassToPeriodSubject = (subject) => {
    setColorsPeriod([
      ...colorsPeriod,
      {
        subjectCode: subject?.subjectCode,
        groupCode: subject?.groupCode,
        className: getRandomClassColor(),
      },
    ]);
  };

  const copyAllSubject = (obj) => {
    return { ...obj, schedule: obj?.schedule.map((sch) => ({ ...sch })) };
  };

  const checkPeriodsCollision = (periodsOfSubject) => {
    const collisionsPeriod = [];
    selectedSubjects.forEach((period) => {
      const periodWithcollision = periodsOfSubject.find(
        (periodOfSubject) =>
          period.day === periodOfSubject.day &&
          parseInt(periodOfSubject.start) >= parseInt(period.start) &&
          parseInt(periodOfSubject.end) <= parseInt(period.end)
      );
      if (periodWithcollision) {
        buildCollision(period, periodWithcollision, collisionsPeriod);
      }
    });
    setCollisions([...collisions, ...collisionsPeriod]);
  };
  const buildCollision = (periodOne, periodTwo, array) => {
    const newPeriod = {
      subjectNames: [periodOne.subjectName, periodTwo.subjectName],
      subjectCodes: [periodOne.subjectCode, periodTwo.subjectCode],
      groupCodes: [periodOne.groupCode, periodTwo.groupCode],
      day: periodOne.day,
    };
    if (
      periodOne.start === periodTwo.start &&
      periodTwo.end === periodOne.end
    ) {
      array.push({
        ...newPeriod,
        end: periodOne.end,
        start: periodOne.start,
        duration: periodOne.duration,
      });
    }
    if (
      parseInt(periodTwo.start) > parseInt(periodOne.start) &&
      periodOne.end === periodTwo.end
    ) {
      array.push({
        ...newPeriod,
        end: periodTwo.start,
        start: periodOne.start,
      });
    }
    if (
      periodTwo.start === periodOne.start &&
      parseInt(periodOne.end) < parseInt(periodTwo.end)
    ) {
      array.push({ ...newPeriod, end: periodOne.end, start: periodTwo.end });
    }
  };
  /*
  const collisionCases = (subjectRespect, { subject, scheduleDay }) => {
    const { classPeriod } = subjectRespect;
    const { subjectName, subjectCode, groupCode } = subject;
    const { start, end } = scheduleDay;
    if (classPeriod.start === start && classPeriod.end === end) {
      classPeriod.collision = { subjectName, subjectCode, groupCode };
      scheduleDay.collision = {
        subjectName: subjectRespect.subjectName,
        subjectCode: subjectRespect.subjectCode,
        groupCode: subjectRespect.groupCode,
      };
    }
    if (
      parseInt(start) > parseInt(classPeriod.start) &&
      classPeriod.end === end
    ) {
      classPeriod.end = start;
      scheduleDay.collision = { subjectName };
    }
    if (
      start === classPeriod.start &&
      parseInt(classPeriod.end) < parseInt(end)
    ) {
      classPeriod.start = end;
      scheduleDay.collision = { subjectName };
    }
  };
  */
  const removeSubject = ({ subjectCode, groupCode }) => {
    removeClassColor({ subjectCode, groupCode });
    removeCollisions({ subjectCode, groupCode });
    const periods = selectedSubjects.filter(
      (period) =>
        !(period.subjectCode === subjectCode && period.groupCode === groupCode)
    );
    setSelectedSubjects(periods);
  };

  const getColorPeriodById = (period) => {
    return colorsPeriod.find(
      ({ subjectCode, groupCode }) =>
        subjectCode === period?.subjectCode && groupCode === period?.groupCode
    );
  };
  const removeClassColor = ({ subjectCode, groupCode }) => {
    const period = getColorPeriodById({ subjectCode, groupCode });
    if (period) enableColor(period.className);
    setColorsPeriod(
      colorsPeriod.filter(
        (period) =>
          !(
            period.subjectCode === subjectCode && period.groupCode === groupCode
          )
      )
    );
  };

  const removeCollisions = ({ subjectCode, groupCode }) => {
    const periods = collisions.filter(
      (period) =>
        !(
          period.subjectCodes.includes(subjectCode) &&
          period.groupCodes.includes(groupCode)
        )
    );
    setCollisions(periods);
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedSubjects,
        addSubject,
        removeSubject,
        colorsPeriod,
        collisions,
        getColorPeriodById,
      }}>
      {children}
    </CalendarContext.Provider>
  );
}
