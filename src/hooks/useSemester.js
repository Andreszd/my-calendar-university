import { useEffect, useState } from 'react';
import { getCareer } from '../../../services/assignatures';

export default function useSemester({ level }) {
  const [assignaturesBySemester, setAssignaturesBySemester] = useState([]);

  useEffect(async () => {
    const level = 'A';
    const res = await getCareer({ idCareer });
    setAssignaturesBySemester(res);
  }, []);

  const getSemesterOfCareer = () => {};

  return { assignaturesBySemester };
}
