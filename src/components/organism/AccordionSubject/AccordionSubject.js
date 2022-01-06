import Accordion from '../../molecules/Accordion';
import ItemAccordion from '../../atoms/ItemAccordion';
import Checkbox from '../../atoms/Checkbox/Checkbox';

import PropTypes from 'prop-types';

export default function AccordionAssignature({ subject }) {
  return (
    <Accordion title={subject.name} key={subject.code}>
      {subject.groups.map((group) => (
        <ItemAccordion key={group.code}>
          <Checkbox text={group.teacher} id={`${subject.code}-${group.code}`} />
        </ItemAccordion>
      ))}
    </Accordion>
  );
}
AccordionAssignature.propTypes = {
  subject: PropTypes.object.isRequired,
};
