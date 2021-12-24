import { useState } from 'react';
import HeaderItemAccordion from '../../atoms/HeaderItemAccordion';

import './ItemAccordion.css';

export default function ItemAccordion() {
  const [isActive, setActive] = useState(false);
  //TODO refactor name
  //Question: is necesary to have a atom that only contains a html tag ??
  return (
    <>
      <div className="item-accordion">
        <HeaderItemAccordion
          isActive={isActive}
          onClick={() => setActive(!isActive)}>
          Quimica
        </HeaderItemAccordion>
        {isActive && (
          <ul className="item-accordion__list">
            <li className="item-accordion__item">hello</li>
            <li className="item-accordion__item">hello</li>
          </ul>
        )}
      </div>
    </>
  );
}
