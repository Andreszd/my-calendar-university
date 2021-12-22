import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

export default function Input({
  type,
  placeholder,
  defaultOption,
  hasFullWidth,
}) {
  if (type === 'select')
    return (
      <select
        className={classNames('input input-select', {
          'full-width': hasFullWidth,
        })}>
        <option disabled selected>
          {defaultOption}
        </option>
        <option>hello</option>
      </select>
    );
  return <input className="input" placeholder={placeholder} type={type} />;
}
//TODO add more types of inputs
Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select']),
  placeholder: PropTypes.string,
  defaultOption: PropTypes.string,
  hasFullWidth: PropTypes.bool,
};

Input.defaultProps = {
  hasFullWidth: false,
};
