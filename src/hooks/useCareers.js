import { useEffect, useState } from 'react';
import { getCareers } from '../services/careers';

export default function useCareer() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    getCareers().then((res) => {
      setCareers(res);
    });
  }, []);

  //const getAssignaturesBySemester = (semester) => {};

  return { careers };
}
