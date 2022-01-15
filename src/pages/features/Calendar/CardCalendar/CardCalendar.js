import classNames from 'classnames';

import './CardCalendar.css';

import { colums, rows } from 'pages/features/Calendar/constants';

import PropTypes from 'prop-types';

const CardCalendar = ({
  children,
  row,
  col,
  className,
  isDisabled,
  modifier,
}) => {
  return (
    <div
      className={classNames(`card-calendar ${className}`, {
        'not-show': isDisabled,
        [`card-calendar--${modifier}`]: modifier,
      })}
      style={{
        gridRow: row,
        gridColumn: col,
      }}>
      {children}
    </div>
  );
};
CardCalendar.propTypes = {
  children: PropTypes.node,
  row: PropTypes.string,
  col: PropTypes.oneOf(Object.values(colums)),
  className: PropTypes.string,
};
CardCalendar.defaultProps = {
  className: '',
};

export default CardCalendar;
