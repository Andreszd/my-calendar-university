import './Checkbox.css';

export default function Checkbox({ text, id }) {
  //TODO handler many checkbox
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={id}>
        {text}
      </label>
      <input id={id} type="checkbox" className="checkbox__input" />
    </div>
  );
}
