import './ItemAccordion.css';

export default function ItemAccordion() {
  //TODO refactor name
  return (
    <>
      <div className="item-accordion">
        <div className="item-accordion__header">
          <p className="item-accordion__text">QUIMICA GENERAL</p>
        </div>
        <ul className="item-accordion__childs">
          <li></li>
        </ul>
      </div>
    </>
  );
}
