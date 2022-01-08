import HeaderAccordion from '../../atoms/HeaderAccordion';
import useHandlerActive from '../../../hooks/useHandlerActive';
import TransitionComponent from '../../../hoc/TransitionComponent';

import PropTypes from 'prop-types';

import './Accordion.css';

export default function Accordion({ children, title }) {
  const { isShowing, switchShow } = useHandlerActive(false);
  //TODO refactor name
  //TODO thinking if remove transitioncomponent or replace by csstransitiongroup
  //Question: is necesary to have a atom that only contains a html tag ??
  return (
    <>
      <div className="accordion">
        <HeaderAccordion isActive={isShowing} onClick={() => switchShow()}>
          {title}
        </HeaderAccordion>
        {isShowing && (
          <TransitionComponent isMounted={isShowing}>
            <ul className="accordion__list">{children}</ul>
          </TransitionComponent>
        )}
      </div>
    </>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
