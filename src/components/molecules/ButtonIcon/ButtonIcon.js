import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

import { libIcons } from '../../../libs/mapIcons';
import { typeButtons } from '../../../enums/typeButtons';

import PropTypes from 'prop-types';

const ButtonIcon = ({ children, type, icon, onClick }) => {
  return (
    <div className="button-icon">
      <Button type={type} onClick={onClick}>
        <Icon
          type={icon}
          size="sm"
          hasBackground={type === 'quaternary'}
          hasInheritedColor={!(type === 'quaternary')}
        />
        {children}
      </Button>
    </div>
  );
};

ButtonIcon.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(typeButtons),
  icon: PropTypes.oneOf(Object.keys(libIcons)),
  onClick: PropTypes.func,
};
//TODO: delete icon default
ButtonIcon.defaultProps = {
  type: 'primary',
  icon: 'icon-settings',
};

export default ButtonIcon;
