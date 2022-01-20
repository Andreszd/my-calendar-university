import AccordionSubject from '../AccordionSubject';
import Input from 'components/atoms/Input';
import HeaderSection from 'components/atoms/HeaderSection';

import useCareerInfo from 'hooks/useCareerInfo';

import './SubjectsOfCareer.css';

export default function SubjectsOfCarrer({ selectedCareer }) {
  const { semesters, semester, getSemesterByLevel } = useCareerInfo(
    selectedCareer?.careerCode
  );

  const onChange = (evt) => getSemesterByLevel(evt.target.value);

  return (
    <section>
      <HeaderSection title="Career Subjects" />
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
    </section>
  );
}
