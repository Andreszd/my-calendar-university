import Accordion from 'components/molecules/Accordion';

import PropTypes from 'prop-types';
import CheckboxGroup from '../CheckboxGroup';

export default function AccordionAssignature({ subject }) {
  //TODO refactor with tab
  return (
    <Accordion title={subject.name} key={subject.code}>
      {subject.groups.map((group) => (
        <CheckboxGroup
          key={`${subject.code}-${group.code}`}
          subject={subject}
          group={group}
          code={`${subject.code}-${group.code}`}
        />
      ))}
    </Accordion>
  );
}
AccordionAssignature.propTypes = {
  subject: PropTypes.object.isRequired,
};
