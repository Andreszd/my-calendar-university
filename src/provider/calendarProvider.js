import React, { useState } from 'react';

export const CalendarContext = React.createContext();

export function CalendarProvider({ children }) {
  const [selectedAssignatures, setSelectedAssignatures] = useState([]);

  const addAssignature = (assignature) => {
    setSelectedAssignatures([...selectedAssignatures, assignature]);
  };

  return (
    <CalendarContext.Provider value={{ selectedAssignatures, addAssignature }}>
      {children}
    </CalendarContext.Provider>
  );
}
