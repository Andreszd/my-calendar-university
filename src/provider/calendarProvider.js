import React, { useState } from 'react';

import { getClassColor } from 'libs/colors';

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

  const deleteAssignature = ({ subjectCode, groupCode }) => {
    const res = selectedAssignatures.filter(
      (assignature) =>
        !(
          assignature.subjectCode === subjectCode &&
          assignature.groupCode === groupCode
        )
    );
    setSelectedAssignatures(res);
  };

  return (
    <CalendarContext.Provider
      value={{ selectedAssignatures, addAssignature, deleteAssignature }}>
      {children}
    </CalendarContext.Provider>
  );
}
