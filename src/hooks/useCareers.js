import { useEffect, useState } from 'react';
import { getCareers } from '../services/careers';

export default function useCareer() {
  const [careers, setCareers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCareers().then((res) => {
      setCareers(res);
      setLoading(false);
    });
  }, []);

  //const getAssignaturesBySemester = (semester) => {};

  return { careers, isLoading };
}
