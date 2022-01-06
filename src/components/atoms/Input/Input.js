import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

export default function Input({
  type,
  placeholder,
  defaultOption,
  hasFullWidth,
  options,
}) {
  if (type === 'select')
    return (
      <select
        defaultValue="default"
        className={classNames('input input-select', {
          'full-width': hasFullWidth,
        })}>
        <option disabled value="default">
          {defaultOption}
        </option>
        {options?.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    );
  return <input className="input" placeholder={placeholder} type={type} />;
}
//TODO add more types of inputs
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select', 'checkbox']),
  placeholder: PropTypes.string,
  defaultOption: PropTypes.string,
  hasFullWidth: PropTypes.bool,
  options: PropTypes.array,
};

Input.defaultProps = {
  hasFullWidth: false,
};
