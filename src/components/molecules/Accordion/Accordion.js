import HeaderAccordion from '../../atoms/HeaderAccordion';
import useHandlerActive from '../../../hooks/useHandlerActive';
import TransitionComponent from '../../../hoc/TransitionComponent';

import './Accordion.css';

export default function ItemAccordion({ children }) {
  const { isShowing, switchShow } = useHandlerActive(false);
  //TODO refactor name
  //Question: is necesary to have a atom that only contains a html tag ??
  return (
    <>
      <div className="accordion">
        <HeaderAccordion isActive={isShowing} onClick={() => switchShow()}>
          Quimica
        </HeaderAccordion>
        <TransitionComponent isMounted={isShowing}>
          <ul className="accordion__list">{children}</ul>
        </TransitionComponent>
      </div>
    </>
  );
}
