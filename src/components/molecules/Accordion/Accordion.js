import HeaderAccordion from '../../atoms/HeaderAccordion';

import useHandlerActive from '../../../hooks/useHandlerActive';

import PropTypes from 'prop-types';

import './Accordion.css';

export default function Accordion({ children, title }) {
  const { isShowing, switchShow } = useHandlerActive(false);
  //Question: is necesary to have a atom that only contains a html tag ??
  return (
    <>
      <div className="accordion">
        <HeaderAccordion isActive={isShowing} onClick={() => switchShow()}>
          {title}
        </HeaderAccordion>
        {isShowing && (
          <ul className="accordion__list">
            {children?.map((node, idx) => (
              <li key={idx} className="accordion__item">
                {node}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
