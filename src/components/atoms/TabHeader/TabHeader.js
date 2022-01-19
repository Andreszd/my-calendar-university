import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './TabHeader.css';

export default function TabHeader({ text, onClick, isShowing }) {
  return (
    <header className="tab-header" onClick={onClick}>
      <Heading type="h2" textTransform="uppercase" size="md">
        {text}
      </Heading>
      <Icon
        type="icon-arrow-up"
        size="sm"
        className={classNames('tab-header__icon', {
          'is-active': isShowing,
        })}
      />
    </header>
  );
}
TabHeader.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isShowing: PropTypes.bool,
};

TabHeader.defaultProps = {
  isShowing: false,
};

