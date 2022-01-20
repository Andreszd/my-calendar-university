import './CareerItem.css';

export default function CareerItem({ career, changeCareer }) {
  const handlerOnClick = () => {
    changeCareer({
      careerName: career.name,
      careerCode: career.code,
    });
  };
  return (
    <li className="careers-item" onClick={handlerOnClick}>
      <p>{career.name}</p>
    </li>
  );
}

