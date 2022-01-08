import Accordion from 'components/molecules/Accordion';
import ItemAccordion from 'components/atoms/ItemAccordion';

import PropTypes from 'prop-types';
import CheckboxGroup from '../CheckboxGroup';

export default function AccordionAssignature({ subject }) {
  return (
    <Accordion title={subject.name} key={subject.code}>
      {subject.groups.map((group) => (
        <ItemAccordion key={group.code}>
          <CheckboxGroup
            subject={subject}
            group={group}
            code={`${subject.code}-${group.code}`}
          />
        </ItemAccordion>
      ))}
    </Accordion>
  );
}
AccordionAssignature.propTypes = {
  subject: PropTypes.object.isRequired,
};
