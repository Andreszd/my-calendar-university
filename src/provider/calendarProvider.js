import React, { useState } from 'react';

import { getClassColor, enableColor } from 'libs/colors';

export const CalendarContext = React.createContext();

export function CalendarProvider({ children }) {
  const [selectedAssignatures, setSelectedAssignatures] = useState([]);

  const addAssignature = (assignature) => {
    const assg = addColor(assignature);
    setSelectedAssignatures([...selectedAssignatures, assg]);
  };

  //TODO to try change responsabilities
  const addColor = (assignature) => {
    return { ...assignature, className: getClassColor() };
  };

  const removeAssignature = ({ subjectCode, groupCode }) => {
    const stack = [];
    let toRemove = null;
    selectedAssignatures.forEach((assignature) => {
      if (
        assignature.subjectCode === subjectCode &&
        assignature.groupCode === groupCode
      ) {
        toRemove = assignature;
      } else {
        stack.push(assignature);
      }
    });
    enableColor(toRemove?.className);
    setSelectedAssignatures(stack);
  };

  return (
    <CalendarContext.Provider
      value={{ selectedAssignatures, addAssignature, removeAssignature }}>
      {children}
    </CalendarContext.Provider>
  );
}
