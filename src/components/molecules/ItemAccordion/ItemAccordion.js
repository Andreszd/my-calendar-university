import HeaderItemAccordion from '../../atoms/HeaderItemAccordion';

import './ItemAccordion.css';

export default function ItemAccordion() {
  //TODO refactor name
  //Question: is necesary to have a atom that only contains a html tag ??
  return (
    <>
      <div className="item-accordion">
        <HeaderItemAccordion>Quimica</HeaderItemAccordion>
        <ul className="item-accordion__childs">
          <li></li>
        </ul>
      </div>
    </>
  );
}
