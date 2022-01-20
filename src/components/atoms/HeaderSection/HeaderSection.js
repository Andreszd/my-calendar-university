import Heading from '../Heading';
import Icon from '../Icon';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import './HeaderSection.css';

const HeaderSection = ({ title, onClick, isShowing }) => {
  return (
    <header
      className={classNames('l-flex-space-between header-section', {
        'is-clicked': onClick ? true : false,
      })}
      onClick={onClick}>
      <Heading type="h2" textTransform="uppercase" size="md">
        {title}
      </Heading>
      {onClick && (
        <Icon
          type="icon-arrow-up"
          size="sm"
          className={classNames('tab-header__icon', {
            'is-active': isShowing,
          })}
        />
      )}
    </header>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isShowing: PropTypes.bool,
};

HeaderSection.defaultProps = {
  isShowing: false,
};
export default HeaderSection;
