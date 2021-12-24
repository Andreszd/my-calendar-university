import './HeaderItemAccordion.css';

export default function HeaderItemAccordion({ children }) {
  return (
    <div className="item-accordion__header">
      <p className="item-accordion__text">{children}</p>
    </div>
  );
}
