import AccordionSubject from '../AccordionSubject';
import Input from 'components/atoms/Input';
import HeaderSection from 'components/atoms/HeaderSection';
import Spinner from 'components/atoms/Spinner';

import useCareerInfo from 'hooks/useCareerInfo';

import './SubjectsOfCareer.css';

export default function SubjectsOfCarrer({ selectedCareer, removeCareer }) {
  const { semesters, semester, getSemesterByLevel, isLoading } = useCareerInfo(
    selectedCareer?.careerCode
  );

  const onChange = (evt) => getSemesterByLevel(evt.target.value);

  const handleClick = () => removeCareer();

  return (
    <section className="subjects">
      <HeaderSection title={selectedCareer?.careerName} />
      {isLoading && <Spinner />}
      <Input
        type="select"
        defaultOption="Semesters"
        onChange={onChange}
        hasFullWidth={true}>
        {semesters.map(({ code, name }, idx) => (
          <option key={idx} value={code}>
            {name}
          </option>
        ))}
      </Input>
      <div className="subjects__content">
        <p className="subjects__text">
          <span className="subjects__link" onClick={handleClick}>
            Change Career
          </span>
        </p>
        {semester?.subjects?.map((subject) => (
          <AccordionSubject subject={subject} key={subject.code} />
        ))}
      </div>
    </section>
  );
}
