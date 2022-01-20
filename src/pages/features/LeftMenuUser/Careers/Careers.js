import HeaderSection from 'components/atoms/HeaderSection';
import CareerItem from 'pages/features/LeftMenuUser/CareerItem';

import useCareers from 'hooks/useCareers';

import './Careers.css';

export default function Careers({ selectCareer }) {
  const { careers } = useCareers();

  const changeCareer = (career) => {
    selectCareer(career);
  };

  return (
    <section>
      <HeaderSection title="Careers" />
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

