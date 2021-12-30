import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TransitionComponent.css';

//TODO add more config transition
//TODO  rename component to transitionComponent
//TODO move to components folder

export default function TransitionComponent({ children, isMounted }) {
  return (
    <div
      className={classNames('wrapper-animation', {
        'is-mounted': isMounted,
      })}>
      {children}
    </div>
  );
}

TransitionComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isMounted: PropTypes.bool,
};
