import PropTypes from 'prop-types';

import classNames from 'classnames';
import './HeaderItemAccordion.css';

export default function HeaderItemAccordion({ children, isActive, onClick }) {
  return (
    <div
      className={classNames('item-accordion__header', {
        'is-active': isActive,
      })}
      onClick={onClick}>
      <p className="item-accordion__text">{children}</p>
    </div>
  );
}

HeaderItemAccordion.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};
