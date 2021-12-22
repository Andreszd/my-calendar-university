import HeaderSubjects from '../../molecules/HeaderSubjects';
import ItemAccordion from '../../atoms/ItemAccordion';
import Input from '../../atoms/Input';

import './SubjectsOfCareer.css';

export default function SubjectsOfCarrer({ isShowing, setShow }) {
  return (
    <>
      <HeaderSubjects isShowing={isShowing} setShow={setShow} />
      <Input type="select" defaultOption="Levels" hasFullWidth={true} />
      <div className="subjects__content">
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
        <ItemAccordion />
      </div>
    </>
  );
}
