import HeaderSection from '../HeaderSection';
import PropTypes from 'prop-types';

import './TabHeader.css';

export default function TabHeader({ text, onClick, isShowing }) {
  return <HeaderSection title={text} onClick={onClick} isShowing={isShowing} />;
}
TabHeader.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isShowing: PropTypes.bool.isRequired,
};

TabHeader.defaultProps = {
  isShowing: false,
};
