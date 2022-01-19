import HeaderSubjects from 'components/molecules/HeaderSubjects';
import AccordionSubject from '../AccordionSubject';
import Input from 'components/atoms/Input';
import Tab from 'components/molecules/Tab';

import useCareer from 'hooks/useCareer';

import './SubjectsOfCareer.css';

export default function SubjectsOfCarrer({ isShowing, setShow }) {
  const { semesters, semester, getSemesterByLevel } = useCareer();

  const onChange = (evt) => getSemesterByLevel(evt.target.value);

  return (
    <>
      <Tab text="Career Subjects">
        <Input
          type="select"
          defaultOption="Levels"
          onChange={onChange}
          hasFullWidth={true}>
          {semesters.map(({ code, name }, idx) => (
            <option key={idx} value={code}>
              {name}
            </option>
          ))}
        </Input>
        <div className="subjects__content">
          {semester?.subjects?.map((subject) => (
            <AccordionSubject subject={subject} key={subject.code} />
          ))}
        </div>
      </Tab>
    </>
  );
}
