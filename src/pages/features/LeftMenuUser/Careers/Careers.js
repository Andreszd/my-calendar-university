import HeaderSection from 'components/atoms/HeaderSection';
import CareerItem from 'pages/features/LeftMenuUser/CareerItem';
import Spinner from 'components/atoms/Spinner';

import useCareers from 'hooks/useCareers';

import './Careers.css';

export default function Careers({ selectCareer }) {
  const { careers, isLoading } = useCareers();

  const changeCareer = (career) => {
    selectCareer(career);
  };

  return (
    <section className="careers">
      <HeaderSection title="Careers" />
      {isLoading && <Spinner />}
      <ul className="careers-list">
        {careers?.map((career) => (
          <CareerItem
            career={career}
            key={career.code}
            changeCareer={changeCareer}
          />
        ))}
      </ul>
    </section>
  );
}
