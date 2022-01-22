import Icon from 'components/atoms/Icon';
import PropTypes from 'prop-types';

import './Hamburguer.css';

export default function Hamburguer({ onClick }) {
  return (
    <Icon
      type="icon-hamburguer"
      size="md"
      className="hamburguer"
      onClick={onClick}
    />
  );
}

Hamburguer.propTypes = {
  onClick: PropTypes.func,
};

