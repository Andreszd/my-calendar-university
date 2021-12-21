import PropTypes from 'prop-types';
import classNames from 'classnames';

import { typeButtons } from '../../../enums/typeButtons';

import './Button.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', {
        [`button--${type}`]: type,
      })}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(typeButtons),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
};
export default Button;
