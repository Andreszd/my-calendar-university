import PropTypes from 'prop-types';

import './Checkbox.css';

export default function Checkbox({ text, id, onChange }) {
  //TODO handler many checkbox
  return (
    <div className="checkbox">
      <label className="checkbox__label" htmlFor={id}>
        {text}
      </label>
      <input
        id={id}
        type="checkbox"
        className="checkbox__input"
        onChange={onChange}
      />
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
