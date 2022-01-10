import React, { useState } from 'react';

export const CalendarContext = React.createContext();

export function CalendarProvider({ children }) {
  const [selectedAssignatures, setSelectedAssignatures] = useState([]);

  const addAssignature = (assignature) => {
    setSelectedAssignatures([...selectedAssignatures, assignature]);
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
      value={{ selectedAssignatures, addAssignature, deleteAssignature }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
