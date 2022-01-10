import { useContext } from 'react';
import Checkbox from 'components/atoms/Checkbox';

import PropTypes from 'prop-types';
import { CalendarContext } from 'provider/calendarProvider';

export default function CheckboxGroup({ group, code, subject }) {
  const { addAssignature } = useContext(CalendarContext);

  const handlerOnChange = (evt) =>
    evt.target.checked &&
    addAssignature({
      nameSubject: subject.name,
      schedule: group.schedule,
      subjectCode: subject.code,
      groupCode: group.code,
    });

  return <Checkbox text={group.teacher} id={code} onChange={handlerOnChange} />;
}

CheckboxGroup.propTypes = {
  group: PropTypes.object.isRequired,
  code: PropTypes.string.isRequired,
};
