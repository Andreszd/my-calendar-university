import React, { useState } from 'react';

import { getRandomClassColor, enableColor } from 'libs/colors';

import { MAX_SUBJECTS_GROUP_SELECTED } from 'constants.js';
import { amountPeriodsByRangePeriod } from 'libs/calculatePeriods.js';

import {
  caseCollisionOne,
  caseCollisionTwo,
  caseCollisionThree,
  caseCollisionFour,
  caseCollisionFive,
  caseCollisionSix,
  caseCollisionSeven,
} from 'libs/collisionsCases.js';

export const CalendarContext = React.createContext();

export function CalendarProvider({ children }) {
  const [collisions, setCollisions] = useState([]);
  const [groupSubjects, setGroupSubjects] = useState([]);
  const [subjectGroupPeriods, setSubjectGroupPeriods] = useState([]);
  const [modifiedGroups, setModifiedGroups] = useState([]);

  const addSubject = (subject) => {
    if (groupSubjects.length + 1 > MAX_SUBJECTS_GROUP_SELECTED) {
      return console.error('cant add more than 8 subjects');
    }
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
    setSubjectGroupPeriods([...subjectGroupPeriods, ...periodsOfSubject]);
  };

  const addClassToPeriodSubject = (subject) => {
    setGroupSubjects([
      ...groupSubjects,
      {
        subjectName: subject?.subjectName,
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
    const newGroups = [];
    subjectGroupPeriods.forEach((period) => {
      const periodWithcollision = periodsOfSubject.find(
        (periodOfSubject) =>
          period.day === periodOfSubject.day &&
          hasCollision(period, periodOfSubject)
      );
      if (periodWithcollision) {
        buildCollision(
          period,
          periodWithcollision,
          collisionsPeriod,
          newGroups
        );
      }
    });
    if (collisionsPeriod.length > 0)
      setCollisions([...collisions, ...collisionsPeriod]);
    if (newGroups.length > 0)
      setModifiedGroups([...modifiedGroups, ...newGroups]);
  };

  const hasCollision = (periodOne, periodTwo) => {
    const { start: aStart, end: aEnd } = parseIntPeriodAttr(periodOne);
    const { start: bStart, end: bEnd } = parseIntPeriodAttr(periodTwo);

    return (
      caseCollisionOne({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionTwo({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionThree({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionFour({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionFive({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionSix({ bStart, bEnd, aStart, aEnd }) ||
      caseCollisionSeven({ bStart, bEnd, aStart, aEnd })
    );
  };

  const parseIntPeriodAttr = ({ start, end }) => {
    if (!start || !end) return;
    return { start: parseInt(start), end: parseInt(end) };
  };

  const buildCollision = (
    periodOne,
    periodTwo,
    collisionsPeriod,
    newPeriods
  ) => {
    const { start: aStart, end: aEnd } = parseIntPeriodAttr(periodOne);
    const { start: bStart, end: bEnd } = parseIntPeriodAttr(periodTwo);

    const createdBy = {
      subjectCodes: [periodOne.subjectCode, periodTwo.subjectCode],
      groupCodes: [periodOne.groupCode, periodTwo.groupCode],
    };

    const newPeriod = {
      subjectNames: [periodOne.subjectName, periodTwo.subjectName],
      createdBy,
      day: periodOne.day,
    };

    if (
      periodOne.start === periodTwo.start &&
      periodTwo.end === periodOne.end
    ) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodOne.end,
        start: periodOne.start,
        duration: periodOne.duration,
      });
    }
    if (caseCollisionTwo({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodOne.end,
        start: periodTwo.start,
        duration: amountPeriodsByRangePeriod(bStart, aEnd),
      });
      newPeriods.push({
        ...periodOne,
        end: periodTwo.start,
        createdBy,
        duration: amountPeriodsByRangePeriod(aStart, bStart),
      });
      newPeriods.push({
        ...periodTwo,
        start: periodOne.end,
        end: periodTwo.end,
        createdBy,
        duration: amountPeriodsByRangePeriod(aEnd, bEnd),
      });
    }
    if (caseCollisionThree({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodTwo.end,
        start: periodOne.start,
        duration: amountPeriodsByRangePeriod(aStart, bEnd),
      });
      newPeriods.push({
        ...periodTwo,
        end: periodOne.start,
        createdBy,
        duration: amountPeriodsByRangePeriod(bStart, aStart),
      });
      newPeriods.push({
        ...periodOne,
        start: periodTwo.end,
        createdBy,
        duration: amountPeriodsByRangePeriod(bEnd, aEnd),
      });
    }
    if (caseCollisionFour({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodTwo.end,
        start: periodTwo.start,
        duration: amountPeriodsByRangePeriod(bStart, bEnd),
      });
      newPeriods.push({
        ...periodOne,
        end: periodTwo.start,
        createdBy,
        duration: amountPeriodsByRangePeriod(aStart, bStart),
      });
    }
    if (caseCollisionFive({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodTwo.end,
        start: periodOne.start,
        duration: amountPeriodsByRangePeriod(aStart, bEnd),
      });
      newPeriods.push({
        ...periodTwo,
        end: periodOne.start,
        createdBy,
        duration: amountPeriodsByRangePeriod(bStart, aStart),
      });
    }
    if (caseCollisionSix({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodTwo.end,
        start: periodOne.start,
        duration: amountPeriodsByRangePeriod(aStart, bEnd),
      });
      newPeriods.push({
        ...periodOne,
        start: periodTwo.end,
        createdBy,
        duration: amountPeriodsByRangePeriod(bEnd, aEnd),
      });
    }
    if (caseCollisionSeven({ bStart, bEnd, aStart, aEnd })) {
      collisionsPeriod.push({
        ...newPeriod,
        end: periodOne.end,
        start: periodOne.start,
        duration: amountPeriodsByRangePeriod(aStart, aEnd),
      });
      newPeriods.push({
        ...periodTwo,
        start: periodOne.end,
        createdBy,
        duration: amountPeriodsByRangePeriod(aEnd, bEnd),
      });
    }
  };

  const removeSubject = ({ subjectCode, groupCode }) => {
    removeClassColor({ subjectCode, groupCode });
    removeCollisions({ subjectCode, groupCode });
    removeModifiedGroups({ subjectCode, groupCode });
    setSubjectGroupPeriods(
      subjectGroupPeriods.filter(
        (period) =>
          !(
            period.subjectCode === subjectCode && period.groupCode === groupCode
          )
      )
    );
  };

  const removeModifiedGroups = ({ subjectCode, groupCode }) => {
    setModifiedGroups(
      modifiedGroups.filter(
        ({ createdBy }) =>
          !(
            createdBy.subjectCodes.includes(subjectCode) &&
            createdBy.groupCodes.includes(groupCode)
          )
      )
    );
  };

  const removeCollisions = ({ subjectCode, groupCode }) => {
    setCollisions(
      collisions.filter(
        ({ createdBy }) =>
          !(
            createdBy.subjectCodes.includes(subjectCode) &&
            createdBy.groupCodes.includes(groupCode)
          )
      )
    );
  };

  const getSubjectById = (period) => {
    return groupSubjects.find(
      ({ subjectCode, groupCode }) =>
        subjectCode === period?.subjectCode && groupCode === period?.groupCode
    );
  };

  const removeClassColor = ({ subjectCode, groupCode }) => {
    const period = getSubjectById({ subjectCode, groupCode });
    if (period) enableColor(period.className);
    setGroupSubjects(
      groupSubjects.filter(
        (period) =>
          !(
            period.subjectCode === subjectCode && period.groupCode === groupCode
          )
      )
    );
  };

  return (
    <CalendarContext.Provider
      value={{
        subjectGroupPeriods,
        addSubject,
        removeSubject,
        groupSubjects,
        collisions,
        getSubjectById,
        modifiedGroups,
      }}>
      {children}
    </CalendarContext.Provider>
  );
}
