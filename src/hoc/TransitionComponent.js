import './TransitionComponent.css';

import classNames from 'classnames';

//TODO add more config transition
//TODO  rename component to transitionComponent

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
