import { useEffect, useState } from 'react';
import { getCareer } from '../services/assignatures';

export default function useCareer() {
  const [career, setCareer] = useState({});
  const [semesters, setSemesters] = useState([]);
  const [semester, setSemester] = useState(null);

  useEffect(() => {
    getCareer('399501').then((res) => {
      setCareer(res);
      setSemesters(getAllSemesters(res));
    });
  }, []);

  const getAllSemesters = (career) => {
    return career.levels.map((lvl, idx) => ({
      ...lvl,
      name: `semester ${idx + 1}`,
    }));
  };

  const getSemesterByLevel = (code) => {
    const res = semesters.filter((semester) => semester.code === code)[0];
    if (res) setSemester(res);
  };

  //const getAssignaturesBySemester = (semester) => {};

  return { career, semesters, semester, getSemesterByLevel };
}
